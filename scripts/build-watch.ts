import buildTypings from './utils/buildTypings';
import generateTypings, { Logger } from './utils/generateTypings';
import clearCache from './utils/clearCache';
import * as path from 'path';

const configs = require('./configs.json');

const nodemon = require('nodemon');
const configsFile = 'src/configs.ts';

const cwd = process.cwd();

const templateDir = path.relative(cwd, configs.templateDir);
const indexTs = path.join(cwd, configs.templateDir,'index.ts');

nodemon({
  script: './scripts/nothing.js',
  ext: 'ts md',
  watch: [templateDir, configsFile],
});

const leftpad = (num: number) => (num < 10) ? '0' + num : num.toString();

const logger: Logger = ({ input, output }) => {
  const date = new Date();
  console.log(`[${
    leftpad(date.getHours())
  }:${
    leftpad(date.getMinutes())
  }:${
    leftpad(date.getSeconds())
  }] ${input} -> ${output}`);
};

buildTypings(logger);
nodemon.on('restart', (files?: string[]) => {
  console.log();
  clearCache();
  if (!files || files.some(x => x.indexOf(configsFile) !== -1)) {
    buildTypings(logger);
  } else {
    generateTypings([...files, indexTs], logger);
  }
});
