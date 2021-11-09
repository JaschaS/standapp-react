import React from 'react';

interface CopyProps {
    children?: React.ReactNode;
    className?: string;
}

export function Copy1(props: CopyProps): JSX.Element {
    return (
        <p className={props.className} style={style(16)}>
            {props.children}
        </p>
    );
}

export function Copy2(props: CopyProps): JSX.Element {
    return (
        <p className={props.className} style={style(12)}>
            {props.children}
        </p>
    );
}

export function Copy3(props: CopyProps): JSX.Element {
    return (
        <p className={props.className} style={style(10)}>
            {props.children}
        </p>
    );
}

function style(fontSize: number) {
    return {
        fontFamily: 'Inter',
        fontSize: `${fontSize}px`,
        fontWeight: 400,
        letterSpacing: '0',
    };
}