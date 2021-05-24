const timeoutMs = 10 * 1000;

const fetcher = async (requestUrl) => {
  const abortController = new AbortController();
  const { signal } = abortController;
  setTimeout(() => abortController.abort(), timeoutMs);

  try {
    const response = await fetch(requestUrl, { signal });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetcher;
