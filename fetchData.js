import * as response from './data';

const fetchData = () => new Promise((resolve) => {
  setTimeout(() => resolve(response), 900);
});

export default fetchData;