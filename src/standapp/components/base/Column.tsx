import React from 'react';

interface ColumnProps {
    className?: string;
    children?: React.ReactNode;
}

export function Column(props: ColumnProps): JSX.Element {
    let childrenCount = 0;
    if (props.children) {
        childrenCount = React.Children.count(props.children);
    }

    const style = {
        display: 'grid',
        gridTemplateRows: `repeat(${childrenCount},
         auto)`,
    };

    return (
        <div className={props.className} style={style}>
            {props.children}
        </div>
    );
}
