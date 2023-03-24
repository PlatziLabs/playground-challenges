import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  return Promise.all([doTask1(), doTask2(), doTask3()]);
}
