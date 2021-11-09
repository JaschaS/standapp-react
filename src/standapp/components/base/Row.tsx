import React from 'react';

export function Row(props: any) {
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${props.children.length}, auto)`,
    width: 'fit-content',
    gridColumnGap: '12px',
  };

  return (
    <div className={props.className} style={style}>
      {props.children}
    </div>
  );
}
