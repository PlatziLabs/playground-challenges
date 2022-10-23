import { runCode } from "./exercise";

async function solution(url) {
  const response = await fetch(url);
  return response.json();
}

describe("tests", () => {
  it("should throw an error with URL: '---'", async () => {
    let thrownError;
    try {
      await runCode('---');
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBeInstanceOf(Error);
    expect(thrownError.message).toBe('Invalid URL');
  });

  it("should throw an error with URL: 'http://'", async () => {
    let thrownError;
    try {
      await runCode('http://');
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBeInstanceOf(Error);
    expect(thrownError.message).toBe('Invalid URL');
    expect(() => runCode('hola')).rejects.toThrowError(new Error("Invalid URL"));
    expect(() => runCode('')).rejects.toThrowError(new Error("Invalid URL"));
  });

  it("should throw an error with URL: 'text'", async () => {
    let thrownError;
    try {
      await runCode('text');
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBeInstanceOf(Error);
    expect(thrownError.message).toBe('Invalid URL');
  });

  it("should throw an error with URL: ''", async () => {
    let thrownError;
    try {
      await runCode('');
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBeInstanceOf(Error);
    expect(thrownError.message).toBe('Invalid URL');
  });

  it("should throw an error with valid URL but inexistent API", async () => {
    let thrownError;
    try {
      await runCode('https://domain-a.com/api-1');
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBeInstanceOf(Error);
    expect(thrownError.message).toBe('Something was wrong');
  });

  it("should return the data in json format", async () => {
    const usersOriginal = await solution('https://jsonplaceholder.typicode.com/users');
    const users = await runCode('https://jsonplaceholder.typicode.com/users');
    expect(users).toEqual(usersOriginal);
    const postsOriginal = await solution('https://jsonplaceholder.typicode.com/posts');
    const posts = await runCode('https://jsonplaceholder.typicode.com/posts');
    expect(posts).toEqual(postsOriginal);
  });
});
