const execSync = require('child_process').execSync;

let command = null;
const test = 'tsc --noEmit --noImplicitAny test.ts';

const args = process.argv.slice(2);
const scriptName = args.shift();

switch (scriptName) {
  case 'test':
    command = `lerna exec ${args} -- ${test}`;
    break;
  case 'watch':
    command = `cd ./packages/${args.shift()} && nodemon --watch index.d.ts --watch test.ts ../../node_modules/.bin/${test}`;
    break;
  default:
    throw new Error(`Invalid script name '${scriptName}'`);
}

console.log(`$ ${command}`);
execSync(command, { stdio: [0, 1, 2] });
