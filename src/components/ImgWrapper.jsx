import React from 'react';
import { replaceHttpWithHttps } from 'utils/urlParser';

const ImgWrapper = ({ src }) => (
  src && <img src={replaceHttpWithHttps(src)} alt="" />
);

export default ImgWrapper;
