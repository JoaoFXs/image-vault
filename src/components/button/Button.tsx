import React from "react";

interface ButtonProps{
    color?: string;
    label?: string;
    onClick?: (event: any) => void;
    type?: "submit" | "button" | undefined
}
export const Button: React.FC<ButtonProps> = ({
    color, onClick, label, type}: ButtonProps) => {
    return (
            <button  className={`${color} text-white px-4 py-2 rounded-lg`}
                     onClick={onClick}
                     type={type}>
                {label}
            </button>
    )
}