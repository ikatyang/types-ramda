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

const input_relative_dirname = 'src/templates';
const glob_templates = `${input_relative_dirname}/*.ts`;
const glob_markdowns = `${input_relative_dirname}/*.md`;
const glob_index = `${input_relative_dirname}/index.ts`;
const glob_utils = `{src/utils/**/*,src/constants.ts}`;

const output_relative_dirname = 'ramda';
const output_release_relative_dirname = '.';
const output_extname = '.d.ts';

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

gulp.task('build-release', () =>
  gulp.src(glob_index)
    .pipe(gulp_generate(generate_bundle_content))
    .pipe(gulp_rename({extname: output_extname}))
    .pipe(gulp.dest(output_release_relative_dirname)),
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

const export_namespace = dts.create_export_namespace({name: namespace_ramda});

function require_declarations(filename: string): dts.IModuleMember[] {
  // tslint:disable-next-line:no-require-imports
  const required: any = require(filename);
  delete require.cache[require.resolve(filename)];

  const declarations = required.default;

  if (!(declarations instanceof Array)) {
    throw new Error('Template should default-export a generator of declarations');
  }

  return declarations.map(declaration => ({...declaration, export: true}));
}

function emit_declarations(elements: dts.ITopLevelMember[]) {
  return dts.emit(
    dts.create_top_level_element({members: elements}),
  );
}

function generate_file_content(filename: string) {
  return emit_declarations([
    dts.create_triple_slash_reference({path: './index.d.ts'}),
    // dts.create_import_named({
    //   from: './__',
    //   members: [dts.create_import_member({name: 'PH'})],
    // }),
    dts.create_namespace_declaration({
      name: namespace_ramda,
      members: require_declarations(filename),
    }),
  ]);
}

function generate_index_content() {
  return emit_declarations([
    // export_namespace,
    ...glob.sync(glob_templates)
      .filter(filename => !filename.endsWith('index.ts'))
      // .map(filename => dts.create_export_named({
      //   from: `./${gulp_util.replaceExtension(path.relative(input_relative_dirname, filename), '')}`,
      // })),
      .map(filename => dts.create_triple_slash_reference({
        path: `./${gulp_util.replaceExtension(path.relative(input_relative_dirname, filename), '')}${output_extname}`,
      })),
    dts.create_export_equal({value: namespace_ramda}),
  ]);
}

function generate_bundle_content() {
  return emit_declarations([
    export_namespace,
    ...glob.sync(glob_templates, {realpath: true, ignore: glob_index}).reduce(
      (declarations: dts.ITopLevelMember[], filename) =>
        [...declarations, ...require_declarations(filename)],
      [],
    ),
  ]);
}

function gulp_generate(fn: (filename: string) => string) {
  return through.obj((file: gulp_util.File, encoding, callback) => {
    if (file.isBuffer()) {
      file.contents = new Buffer(fn(file.path));
      callback(null, file);
    } else {
      callback(new Error('Support buffer only.'));
    }
  });
}
