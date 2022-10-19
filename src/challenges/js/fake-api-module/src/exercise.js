import { getData } from "./api";

export async function solution() {
  return getData().then(movies => movies);
}
