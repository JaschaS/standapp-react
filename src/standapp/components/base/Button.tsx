import React from "react";
import { Center } from "./Center";
import { FiftyShades, JaschaRed, StandardBlue, WeißerAlsWeiß } from "./Colors";
import { Container } from "./Container";
import { H5 } from "./Header";

export interface ButtonProps {
    type: 'Primary' | 'Secondary' | 'Text';
    text: string;
    className?: string;
}

export function Button(props: ButtonProps) {
    return <Container className={props.className} style={style(props)}>
        <Center>
            <H5>{props.text}</H5>
        </Center>
    </Container>;
}

function style(props: ButtonProps) {

    let backgroundColor = undefined;
    let color = undefined;
    switch(props.type) {
        case 'Primary':
            backgroundColor = JaschaRed;
            color = WeißerAlsWeiß;
            break;
        case 'Secondary':
            backgroundColor = FiftyShades;
            color = StandardBlue;
            break;
        case 'Text':
            color = StandardBlue;
            break;
    }

    return {
        width: '210px',
        height: '56px',
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: '5px'
    };
}