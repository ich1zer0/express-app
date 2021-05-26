const {
  AbortController,
  abortableFetch,
} = require('abortcontroller-polyfill/dist/cjs-ponyfill');
const { fetch } = abortableFetch(require('node-fetch'));
const NodeHttpError = require('../errors/node-http_error');
const errorMessages = require('../config/node-error_messages');

const timeoutMs = 10 * 1000;

const fetcher = async (requestUrl) => {
  const abortController = new AbortController();
  const { signal } = abortController;
  const timeout = setTimeout(() => abortController.abort(), timeoutMs);

  try {
    const response = await fetch(requestUrl, { signal });
    if (!response.ok) {
      throw new NodeHttpError(response.status, errorMessages[response.status]);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    if (error.name === 'AbortError') {
      throw new NodeHttpError(408, errorMessages[408]);
    } else {
      throw error;
    }
  } finally {
    clearTimeout(timeout);
  }
};

export default fetcher;
