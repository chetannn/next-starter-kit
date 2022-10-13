import { Fragment } from "react";

type Props = React.PropsWithChildren<{
    onClick?: () => void;
    type?: "submit" | "button" | "reset" | undefined;
    disabled?: boolean;
    className?: string;
    variant?: "primary" | "secondary" | "danger" | undefined;
    loading?: boolean
}>

const LoadingIcon = () => {
    return (
        <svg className="w-5 h-5 text-white animate-spin absolute left-1/2 -ml-2.5" fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"></path>
        </svg>
    );
}

const Button = ({ className, children, type, onClick, disabled, loading, variant = 'primary' }: Props) => {

    const classNames = []
    classNames.push(className)

    if (variant === 'primary') {
        classNames.push('bg-purple-600 hover:bg-purple-700')
    }
    else if (variant === 'secondary') {
        classNames.push('bg-gray-600 hover:bg-gray-700')
    }
    else if (variant === 'danger') {
        classNames.push('bg-red-600 hover:bg-red-700')
    }

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`${classNames.join(' ')} text-white px-3 py-2 rounded relative`}>
            {loading ?
                <Fragment>
                    <LoadingIcon />
                    <span className="invisible">
                        {children}
                    </span>
                </Fragment> :
                <span>{children}</span>}
        </button>
    );
}

export default Button