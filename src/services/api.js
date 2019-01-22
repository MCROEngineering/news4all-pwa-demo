import axios from 'axios'

export const getAllNewsRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-22&sortBy=publishedAt&apiKey=0e70989b27d641a6af2082bcbd12889b`)
      .then((res) => {
        if (res.status === 200) {
          console.log('Res: ', res);
          setTimeout(() => {
            return resolve(res.data);
          }, 1000);
        }
      })
      .catch(err => {
        reject(err);
      })
  });
};
