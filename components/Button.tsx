type Props = React.PropsWithChildren<{
    onClick?: () => void;
    type?: "submit" | "button" | "reset" | undefined;
    disabled?: boolean;
    className?: string;
    variant?: "primary" | "secondary" | "danger" | undefined
}>

const Button = ({ className, children, type, onClick, disabled, variant = 'primary' }: Props) => {

    const classNames = []
    classNames.push(className)

    if(variant === 'primary') {
        classNames.push('bg-purple-600 hover:bg-purple-700')
    }
    else if(variant === 'secondary') {
         classNames.push('bg-gray-600 hover:bg-gray-700')
    }
    else if(variant === 'danger') {
        classNames.push('bg-red-600 hover:bg-red-700')
    }
    
    return (
        <button 
        onClick={onClick} 
        type={type} 
        disabled={disabled} 
        className={`${classNames.join(' ')} text-white px-3 py-2 rounded`}>{children}</button>
    );
}

export default Button