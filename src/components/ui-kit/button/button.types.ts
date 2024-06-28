export type ButtonSize = "s" | "m" | "l"

export interface ButtonProps {
    title: string;
    size?:  ButtonSize
    handleClick: () => void
}