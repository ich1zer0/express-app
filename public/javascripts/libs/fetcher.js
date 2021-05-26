import HttpError from '../errors/http_error.js';
import errorMessages from '../config/error_messages.js';

const timeoutMs = 10 * 1000;

const fetcher = async (requestUrl) => {
  const abortController = new AbortController();
  const { signal } = abortController;
  const timeout = setTimeout(() => abortController.abort(), timeoutMs);

  try {
    const response = await fetch(requestUrl, { signal });
    if (!response.ok) {
      throw new HttpError(response.status, errorMessages[response.status]);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    if (error.name === 'AbortError') {
      throw new HttpError(408, errorMessages[408]);
    } else {
      throw error;
    }
  } finally {
    clearTimeout(timeout);
  }
};

export default fetcher;
