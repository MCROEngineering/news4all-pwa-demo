import request from 'superagent';

export const getAllNewsRequest = () => {
  return new Promise((resolve, reject) => {
    request
      .get(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-18&sortBy=publishedAt&apiKey=0e70989b27d641a6af2082bcbd12889b`)
      .end((err, res) => {
        if (res.body.success !== false) {
          return resolve(res.body);
        }
        reject(err);
      });
  });
};
