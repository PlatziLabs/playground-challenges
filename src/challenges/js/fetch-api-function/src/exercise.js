export async function runCode(url) {
  try {
    new URL(url);
    const response = await fetch(url);
    return response.json();
   } catch(error) {
     if (error.message === "Failed to construct 'URL': Invalid URL"){
       throw new Error('Invalid URL');
     } else {
       throw new Error('Something was wrong');
     }
   }
}
