import * as fs from 'fs';
import * as path from 'path';
import { Definition } from '../../src/components/definition';

const configs = require('../configs.json');

const cwd = process.cwd();

export type Logger = (data: LoggerData) => void;
export interface LoggerData {
  input: string;
  output: string;
}

const templateDir = path.resolve(cwd, configs.templateDir);
const outputDir = path.resolve(cwd, configs.outputDir);

const extRegex = /\.md$/;

export default (templateFiles: string[], logger: Logger) => {
  const templateTsFiles = Array.from(new Set(templateFiles.map(
    file => extRegex.test(file) ? file.replace(extRegex, '.ts') : file)));
  templateTsFiles.forEach(templateTsFile => {
    let templateModule;
    try {
      templateModule = require(templateTsFile).default;
    } catch (error) {
      console.log((error as Error).message);
      return;
    }
    delete require.cache[require.resolve(templateTsFile)];
    if (!(templateModule instanceof Definition)) {
      console.log(`WARN: Module '${templateTsFile}' should be an instance of Definition`);
      return;
    }
    const outputFile = templateTsFile
      .replace(templateDir, outputDir)
      .replace(/\.ts$/, '.d.ts');
    fs.writeFileSync(outputFile, templateModule.toString());
    logger({
      input: path.relative(cwd, templateTsFile),
      output: path.relative(cwd, outputFile),
    });
  });
};
