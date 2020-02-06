import React from 'react';

const NewsItem = ({ title }) => {
  console.log(title);
  return (
    <li>
      <h2>{title}</h2>
    </li>
  );
};

export default NewsItem;
