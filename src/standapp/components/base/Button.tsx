import React from 'react';
import { Center } from './Center';
import { H5 } from './Header';
import styles from './Button.module.scss';

export interface ButtonProps {
    type: 'primary' | 'secondary' | 'text';
    text: string;
    className?: string;
}

export function Button(props: ButtonProps): JSX.Element {
    let buttonStyle;
    switch (props.type) {
        case 'primary':
            buttonStyle = styles.PrimaryButton;
            break;
        case 'secondary':
            buttonStyle = styles.SecondaryButton;
            break;
        case 'text':
            buttonStyle = styles.TextButton;
            break;
    }

    return (
        <div className={`${props.className} ${buttonStyle}`} onClick={onClick}>
            <Center>
                <H5>{props.text}</H5>
            </Center>
        </div>
    );
}

function onClick(event: React.MouseEvent<HTMLElement>) {
    const buttonElement = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(
        buttonElement.clientWidth,
        buttonElement.clientHeight,
    );
    const radius = diameter / 2;

    console.log(event.clientX);
    console.log(event.clientY);

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${
        event.clientX - (buttonElement.offsetLeft + radius)
    }px`;
    circle.style.top = `${
        event.clientY - (buttonElement.offsetTop + radius)
    }px`;
    circle.classList.add(styles.ripple);

    const oldRippleExist = buttonElement.getElementsByClassName(
        styles.ripple,
    )[0];

    if (oldRippleExist) oldRippleExist.remove();

    buttonElement.appendChild(circle);
}
