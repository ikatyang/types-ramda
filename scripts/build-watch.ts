import buildTypings from './utils/buildTypings';
import generateTypings, { Logger } from './utils/generateTypings';

const nodemon = require('nodemon');

nodemon({
  script: './scripts/nothing.js',
  ext: 'ts md',
  watch: ['templates/'],
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
  if (!files) {
    buildTypings(logger);
  } else {
    generateTypings(files, logger);
  }
});
