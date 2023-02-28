export async function fetchRetry(url, times, count = 1) {
  try {
    const response = await window.fetch(url);
    return response.json();
  } catch (error) {
    if (times === 1) {
      throw Error(`Invalid request with ${count} retries`)
    } else {
      return fetchRetry(url, times - 1, count + 1);
    }
  }
}
