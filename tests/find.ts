import * as R from 'ramda';

interface Task {
  id: number;
}
const tasks: Task[] = [];
const f: (list: Task[]) => Task = R.find<Task>((task: Task) => task.id === 1);
// @dts-jest:skip Task
f(tasks); // works
