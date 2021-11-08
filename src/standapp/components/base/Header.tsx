import React from "react";

export interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

export function H1(props: HeaderProps) {
    return <h1 className={props.className} style={style(40)}>
        {props.children}
    </h1>;
}

export function H2(props: HeaderProps) {
    return <h2 className={props.className} style={style(32)}>
        {props.children}
    </h2>;
}

export function H3(props: HeaderProps) {
    return <h3 className={props.className} style={style(24)}>
        {props.children}
    </h3>;
}

export function H4(props: HeaderProps) {
    return <h4 className={props.className} style={style(20)}>
        {props.children}
    </h4>;
}

export function H5(props: HeaderProps) {
    return <h5 className={props.className} style={style(16)}>
        {props.children}
    </h5>;
}

function style(fontSize: number) {
    return {
        fontFamily: 'Inter',
        fontSize: `${fontSize}px`,
        fontWeight: 600,
        letterSpacing: '0.25px'
    };
}