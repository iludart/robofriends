import React from 'react';

const StickyHeader = (props) => {
  return (
      <div style={{ paddingTop: '100px' }}>
        {props.children}
      </div>
  );
};

export default StickyHeader;