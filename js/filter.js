import { RERENDER_DELAY } from './constants.js';
import { outputData, refetchData } from './fetch.js';
import { debounce } from './utils/debounce.js';
import { clearData } from './row.js';

const search = document.querySelector('#search');

const filterApply = debounce(inputValue => {
  clearData();
  inputValue === '' ? outputData() : refetchData(inputValue);
}, RERENDER_DELAY);

search.addEventListener('input', () => {
  filterApply(search.value);
});
