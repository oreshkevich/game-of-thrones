import React from 'react';

const RowBlock = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col" md="6">
        {left}
      </div>
      <div className="col" md="6">
        {right}
      </div>
    </div>
  );
};

export default RowBlock;
