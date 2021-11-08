import React from "react";

export interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
}

export function Container(props: ContainerProps) {
    return <div className={props.className}>
        {props.children}
    </div>;
}