import * as fs from 'fs';
import * as path from 'path';

import { Declaration } from '../src/components/declaration';

const cwd = process.cwd();

const templateDir = path.resolve(cwd, process.argv[2]);
const outputDir = path.resolve(cwd, process.argv[3]);

const generateTypings = (currentTemplateDir: string, currentOutputDir: string) => {

  if (!fs.existsSync(currentOutputDir)) {
    fs.mkdirSync(currentOutputDir);
  } else if (!fs.statSync(currentOutputDir).isDirectory()) {
    throw new Error(`Path ${currentOutputDir} should be a directory`);
  }

  fs.readdirSync(currentTemplateDir).forEach((filename) => {
    const outputPath = path.join(currentOutputDir, filename);
    const templatePath = path.join(currentTemplateDir, filename);
    const templateStat = fs.statSync(templatePath);
    if (templateStat.isFile() && path.extname(filename) === '.ts') {
      const templateModule = require(templatePath).default;
      if (!(templateModule instanceof Declaration)) {
        throw new Error(`Module '${templatePath}' should be an instance of Declaration`);
      }
      const outputFilePath = outputPath.replace(/\.ts$/, '.d.ts');
      fs.writeFileSync(outputFilePath, templateModule.toString());
      console.log(`${path.relative(cwd, templatePath)} -> ${path.relative(cwd, outputFilePath)}`);
    } else if (templateStat.isDirectory()) {
      generateTypings(templatePath, outputPath);
    }
  });
};

generateTypings(templateDir, outputDir);
