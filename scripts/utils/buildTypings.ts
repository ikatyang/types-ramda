import * as fs from 'fs';
import * as path from 'path';

import generateTypings, { Logger } from './generateTypings';

const configs = require('../configs.json');

const cwd = process.cwd();

const templateDir = path.resolve(cwd, configs.templateDir);
const outputDir = path.resolve(cwd, configs.outputDir);

const _buildTypings = (currentTemplateDir: string, currentOutputDir: string, logger: Logger) => {

  if (!fs.existsSync(currentOutputDir)) {
    fs.mkdirSync(currentOutputDir);
  } else if (!fs.statSync(currentOutputDir).isDirectory()) {
    throw new Error(`Path ${currentOutputDir} should be a directory`);
  }

  const templateFiles: string[] = [];

  fs.readdirSync(currentTemplateDir).forEach((filename) => {
    const outputFile = path.join(currentOutputDir, filename);
    const templateFile = path.join(currentTemplateDir, filename);
    const templateStat = fs.statSync(templateFile);
    if (templateStat.isFile()) {
      templateFiles.push(templateFile);
    } else if (templateStat.isDirectory()) {
      _buildTypings(templateFile, outputFile, logger);
    }
  });

  generateTypings(templateFiles, logger);

};

export default (logger: Logger) => _buildTypings(templateDir, outputDir, logger);
