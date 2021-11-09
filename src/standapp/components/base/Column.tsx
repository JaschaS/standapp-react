import React from 'react';

export function Column(props: any) {
  const style = {
    display: 'grid',
    gridTemplateRows: `repeat(${props.children.length},
         auto)`,
  };

  return (
    <div className={props.className} style={style}>
      {props.children}
    </div>
  );
}
