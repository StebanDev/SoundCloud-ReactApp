import React from 'react';

const Icon = props => {
  const { color, size, viewBox } = props;
  return (
    <svg
      fill={color}
      viewBox={viewBox ? viewBox : '0 0 32 32'}
      width={size}
      height={size}
    >
      {props.children}
    </svg>
  );
};

export default Icon;
