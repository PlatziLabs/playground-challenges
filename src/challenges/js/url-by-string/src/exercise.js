export function parseToURL(title) {
  return title.split(' ').join('-').toLowerCase();
}
