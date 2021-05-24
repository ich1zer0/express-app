const {
  AbortController,
  abortableFetch,
} = require('abortcontroller-polyfill/dist/cjs-ponyfill');
const { fetch } = abortableFetch(require('node-fetch'));

const timeoutMs = 1000 * 10;

const fetcher = async (requestUrl) => {
  const abortController = new AbortController();
  const { signal } = abortController;
  setTimeout(() => abortController.abort(), timeoutMs);

  try {
    const response = await fetch(requestUrl, { signal });
    return response.json();
  } catch (error) {
    return Promise.reject(
      new Error(`${response.status}:${response.statusText}`)
    );
  }
};

export default fetcher;
