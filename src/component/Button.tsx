import React from 'react'
import './Button.css'

interface Props {
    name: string;
    orange?: boolean;
    wide?: boolean;
    clickHandler: (val: string) => void
}

const Button: React.FC<Props> = ({ name, orange, wide, clickHandler }) => {

    const handleClick = () => {

        clickHandler(name)
    }
    const className: Array<string> = [
        'component-button',
        orange ? 'orange' : '',
        wide ? 'wide' : '',
    ];

    return (
        <div className={className.join(' ').trim()}>
            <button onClick={() => handleClick()}>{name}</button>
        </div>
    )
}

export default Button;