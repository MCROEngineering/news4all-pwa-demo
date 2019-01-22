import React from 'react';
import { replaceHttpWithHttps } from 'utils/urlParser';

const Img = ({ src }) => (
  src && <img src={replaceHttpWithHttps(src)} alt="" />
);

export default Img;
