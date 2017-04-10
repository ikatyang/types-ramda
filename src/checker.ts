import { deepEqual } from 'assert';

export default (_module: NodeModule, tester: (check: <T>(name: string, a: T, b: T) => void ) => void) => {
  let errored = false;
  const checkedCounts: { [key: string]: number } = {};
  const stackRegex = new RegExp(`${_module.filename}:([0-9]+):[0-9]+`);

  tester(<T>(name: string, a: T, b: T): void => {
    const checkedCount = (name in checkedCounts)
      ? checkedCounts[name] += 1
      : checkedCounts[name] = 1;
    const caseIndex = checkedCount;
    try {
      deepEqual(a, b);
    } catch (error) {
      errored = true;
      const stack = (error as Error).stack as string;
      const linenum = (stack.match(stackRegex) as string[])[1];
      console.log(`ERROR: at L${linenum} => Test(${name}): Case(${caseIndex})`);
    }
  });

  process.exit(errored ? 1 : 0);
};
