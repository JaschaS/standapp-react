import React from 'react';

interface RowProps {
    className?: string;
    children?: React.ReactNode;
}

export function Row(props: RowProps): JSX.Element {
    let childrenCount = 0;
    if (props.children) {
        childrenCount = React.Children.count(props.children);
    }

    const style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${childrenCount}, auto)`,
        width: 'fit-content',
        gridColumnGap: '12px',
    };

    return (
        <div className={props.className} style={style}>
            {props.children}
        </div>
    );
}
