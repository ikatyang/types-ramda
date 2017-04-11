import buildTypings from './utils/buildTypings';
import generateTypings, { Logger } from './utils/generateTypings';
import clearCache from './utils/clearCache';

const nodemon = require('nodemon');
const configsFile = 'src/configs.ts';

nodemon({
  script: './scripts/nothing.js',
  ext: 'ts md',
  watch: ['templates/', configsFile],
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
    generateTypings(files, logger);
  }
});
