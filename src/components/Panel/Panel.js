import React from 'react';
import './Panel.css';

const Panel = ({children, styles}) => {
  return(
    <div className={`root ${styles}`}>{children}</div>
  );
}
export default Panel;
