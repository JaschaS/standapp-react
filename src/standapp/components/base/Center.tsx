import React from 'react';

export interface CenterProps {
  children?: React.ReactNode;
  className?: string;
}

export function Center(props: CenterProps) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <div className={props.className} style={style}>
      {props.children}
    </div>
  );
}
