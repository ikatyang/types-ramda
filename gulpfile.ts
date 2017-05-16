import * as del from 'del';
import * as dts from 'dts-element';
import * as fs from 'fs';
import * as glob from 'glob';
import * as gulp from 'gulp';
import * as gulp_rename from 'gulp-rename';
import * as gulp_util from 'gulp-util';
import * as minimatch from 'minimatch';
import * as path from 'path';
import * as gulp_run from 'run-sequence';
import * as through from 'through2';

const namespace_ramda = 'R';

const input_relative_dirname = 'src';
const glob_templates = `${input_relative_dirname}/*.ts`;
const glob_markdowns = `${input_relative_dirname}/*.md`;
const glob_index = `${input_relative_dirname}/index.ts`;
const glob_utils = `${input_relative_dirname}/utils/**/*`;

const output_relative_dirname = 'ramda';
const output_extname = '.d.ts';

const export_as_namespace_ramda = new dts.ExportAsNamespace({name: namespace_ramda});

const require_declarations = (filename: string): dts.Declaration[] => {
  // tslint:disable-next-line:no-require-imports
  const required: any = require(filename);
  delete require.cache[require.resolve(filename)];
  const {default: declarations} = required;
  if (!(declarations instanceof Array) || !declarations.every(declaration => declaration instanceof dts.Declaration)) {
    throw new Error('Template should export an array of Declarations');
  }
  return declarations;
};
const clone_as_export_declaration = (declaration: dts.Declaration) => declaration.clone().set({export: true});
const emit_declarations = (elements: (dts.Declaration | dts.ImportExport)[]) =>
  `${new dts.Document({children: elements}).emit()}\n`;

const generate_file_content = (filename: string) =>
  emit_declarations([
    new dts.ImportNamed({
      members: [
        new dts.ImportMember({
          owned: new dts.VariableDeclaration({name: 'PH'}),
        }),
      ],
      from: './__',
    }),
    ...require_declarations(filename).map(clone_as_export_declaration),
  ]);

const generate_index_content = () => emit_declarations([
  export_as_namespace_ramda,
  ...glob.sync(glob_templates)
    .filter(filename => !filename.endsWith('index.ts'))
    .map(filename => new dts.ExportAll({
      from: `./${gulp_util.replaceExtension(path.relative(input_relative_dirname, filename), '')}`,
    })),
]);

const generate_bundle_content = () => emit_declarations([
  export_as_namespace_ramda,
  ...glob.sync(glob_templates, {realpath: true, ignore: glob_index})
    .reduce((declarations: dts.Declaration[], filename) => [...declarations, ...require_declarations(filename)], [])
    .map(clone_as_export_declaration),
]);

const gulp_generate = (fn: (filename: string) => string) => through.obj((file: gulp_util.File, encoding, callback) => {
  if (file.isBuffer()) {
    file.contents = new Buffer(fn(file.path));
    callback(null, file);
  } else {
    callback(new Error('Support buffer only.'));
  }
});

gulp.task('clean', async () => del(output_relative_dirname));

gulp.task('build-files', () =>
  gulp.src([glob_templates, `!${glob_index}`])
    .pipe(gulp_generate(generate_file_content))
    .pipe(gulp_rename({extname: output_extname}))
    .pipe(gulp.dest(output_relative_dirname)),
);

gulp.task('build-index', () =>
  gulp.src(glob_index)
    .pipe(gulp_generate(generate_index_content))
    .pipe(gulp_rename({extname: output_extname}))
    .pipe(gulp.dest(output_relative_dirname)),
);

gulp.task('build', ['clean'], (callback: (error?: any) => void) =>
  gulp_run(['build-files', 'build-index'], callback));

gulp.task('build-release', ['clean'], () =>
  gulp.src(glob_index)
    .pipe(gulp_generate(generate_bundle_content))
    .pipe(gulp_rename({extname: output_extname}))
    .pipe(gulp.dest(output_relative_dirname)),
);

gulp.task('build-watch', ['build'], (_callback: (error?: any) => void) => {
  const log_watching_message = () => gulp_util.log('Watching for file changes.');

  gulp.watch([glob_templates, glob_markdowns, glob_utils, `!${glob_index}`], event => {
    const input_relative_filename = path.relative(process.cwd(), event.path);
    gulp_util.log(`Detected '${gulp_util.colors.cyan(input_relative_filename)}' ${event.type}`);

    if (minimatch(input_relative_filename, glob_utils)) {
      gulp_run('build', log_watching_message);
    } else {
      const input_basename = path.basename(input_relative_filename);
      const input_filename = gulp_util.replaceExtension(event.path, '.ts');
      const output_basename = gulp_util.replaceExtension(input_basename, output_extname);
      const output_relative_filename = path.join(output_relative_dirname, output_basename);
      const output_filename = path.join(process.cwd(), output_relative_filename);

      const build_file = () => {
        try {
          fs.writeFileSync(output_filename, generate_file_content(input_filename));
          gulp_util.log(`Building '${gulp_util.colors.cyan(output_relative_filename)}' complete`);
        } catch (error) {
          const {message} = error as Error;
          gulp_util.log(`Building '${gulp_util.colors.cyan(output_relative_filename)}' failed: ${message}`);
        }
        log_watching_message();
      };

      if (minimatch(input_relative_filename, glob_markdowns)) {
        build_file();
      } else {
        switch (event.type) {
          case 'changed':
            build_file();
            break;
          case 'added':
          case 'deleted':
            gulp_run('build-index', build_file);
            break;
          default:
            throw new Error(`Unexpected event type '${event.type}'`);
        }
      }
    }
  });
});
