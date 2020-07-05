import React from 'react';
import PropTypes from 'prop-types';

const Lives = ({count}) => {
  const lives = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {lives.map((it, i) => (
        <div key={`mistake-${i}`} className="wrong"></div>
      ))}
    </div>
  );
};

Lives.propTypes = {
  count: PropTypes.number.isRequired
};

export default Lives;
