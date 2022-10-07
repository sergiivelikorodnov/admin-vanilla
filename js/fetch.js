import { REQUEST_URL } from './constants.js';
import { showAlert } from './utils.js';
import { drawData } from './row.js';

/**
 * Get fetch
 */

function getData(method, url, body) {
  return fetch(url, {
    method,
    body,
  });
}

/**
 * Get data
 */

const createFetch =
  (onSuccess, onError, method, url, body = null) =>
  () => {
    console.log('fetch');

    getData(method, url, body)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} ${response.statusText}`);
      })
      .then(onSuccess)
      .catch(onError);
  };

const createRefetch =
  (onSuccess, onError, method, url, body = null) =>
  () => {
    console.log('fetch');

    getData(method, url, body)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} ${response.statusText}`);
      })
      .then(onSuccess)
      .catch(onError);
  };

/**
 * Output data from Fetch
 */

const outputData = createFetch(
  data => {
    drawData(data);
  },
  showAlert,
  'GET',
  REQUEST_URL,
);

/**
 * Output data from Refetch search input
 */
const refetchData = query =>
  getData('GET', `${REQUEST_URL}?id=${query}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(data => {
      drawData(data);
    })
    .catch(showAlert());

export { getData, outputData, refetchData };
