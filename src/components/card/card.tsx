import React, {FC} from 'react';
import {useAppSelectior} from "../../hooks/redux";
import {usersReducer} from "../../store/template/reducer";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: () => void
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         children,
         onClick,
         variant
     }) => {
        const {} = useAppSelectior(state => state.usersReducer.)
        return (
            <div style={{
                width, height,
                background: variant === CardVariant.outlined ? 'gray' : 'none',
                border: variant === CardVariant.primary ? '1px black solid' : 'none'
            }} onClick={onClick}
            >
                {children}
            </div>
        );
    };

export default Card;
