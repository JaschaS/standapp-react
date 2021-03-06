import React from 'react';

export interface ContainerProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export function Container(props: ContainerProps): JSX.Element {
    return (
        <div className={props.className} style={props.style}>
            {props.children}
        </div>
    );
}
