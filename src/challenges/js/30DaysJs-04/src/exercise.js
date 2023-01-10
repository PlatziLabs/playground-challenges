export function printTriangle(size, character) {
  const triangle = [];
  for (let i = 1; i <= size; i++) {
    let spaces = " ".repeat(size - i);
    let characters = character.repeat(i);
    let figure = `${spaces}${characters}`;
    triangle.push(figure);
  }

  return triangle.join("\n");
}
