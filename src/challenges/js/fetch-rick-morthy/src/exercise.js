export async function runCode() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results.map((item) => item.name)
}
