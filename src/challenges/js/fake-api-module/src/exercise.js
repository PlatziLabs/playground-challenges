import { getData } from "./api";

export function solution() {
  return getData().then(movies => movies);
}
