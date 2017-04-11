import { deepEqual } from 'assert';

export default (_module: NodeModule, tester: (check: <T>(name: string, a: T, b: T) => void ) => void) => {
  const checkedCounts: { [key: string]: number } = {};
  const stackRegex = new RegExp(`${_module.filename}:([0-9]+):[0-9]+`);

  let failedCount = 0;
  let passedCount = 0;

  tester(<T>(name: string, a: T, b: T): void => {
    const checkedCount = (name in checkedCounts)
      ? checkedCounts[name] += 1
      : checkedCounts[name] = 1;
    const caseIndex = checkedCount;
    try {
      deepEqual(a, b);
      passedCount++;
    } catch (_error) {
      failedCount++;
      const error = _error as Error;
      const stack = error.stack as string;
      const linenum = (stack.match(stackRegex) as string[])[1];
      console.log(`ERROR: at L${linenum} => Test(${name}): Case(${caseIndex})`);
      console.log(`> ${error.message}`);
    }
  });

  console.log(`Passed: ${passedCount}, Failed: ${failedCount}`);
  process.exit(failedCount > 0 ? 1 : 0);
};
