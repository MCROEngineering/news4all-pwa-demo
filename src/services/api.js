import axios from 'axios';

export const getAllNewsRequest = () =>
  new Promise((resolve, reject) => {
    axios
      .get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0e70989b27d641a6af2082bcbd12889b')
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => resolve(res.data), 1000);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
