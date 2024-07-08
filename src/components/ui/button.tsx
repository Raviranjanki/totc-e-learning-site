import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    children: ReactNode | string;
    className?: string;
} & (
        | ({ type: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
        | ({ type: 'link'; to: string })
    );

const Button: React.FC<ButtonProps> = ({ children, className, type, ...props }) => {
    if (type === 'link') {
        const { to, ...rest } = props as { to: string };
        return (
            <Link to={to} className={twMerge("w-max inline-flex items-center px-7 py-3 font-semibold bg-white bg-opacity-40 text-white rounded-full", className)} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button className={twMerge("", className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
