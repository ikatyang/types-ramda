import * as R from 'ramda';

type Task = {id: number};
let tasks: Task[] = [];
const a = R.find((task: Task) => task.id === 1, tasks); // this works
const f: (list: Task[]) => Task = R.find<Task>((task: Task) => task.id === 1);
// @dts-jest:skip Task
f(tasks); // works
