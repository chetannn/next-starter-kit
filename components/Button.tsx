type Props = React.PropsWithChildren<{
    onClick?: () => void;
    type?: "submit" | "button" | "reset" | undefined;
    disabled?: boolean;
    className?: string;
}>

const Button = ({ className, children, type, onClick, disabled }: Props) => {
    return (
        <button 
        onClick={onClick} 
        type={type} 
        disabled={disabled} 
        className={`${className} text-white bg-purple-600 hover:bg-purple-700 px-3 py-2`}>{children}</button>
    );
}

export default Button