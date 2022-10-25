import { triangleArea } from "./exercise";

describe('Test Triangle Area Function', () => {
  test('Calculate Area with numbers', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });
});
