const Button = ({ className, children, props }) => {
    return (
            <button {...props} className={`${className} text-white bg-purple-600 hover:bg-purple-700 px-3 py-2`}>{children}</button>
    );
}

export default Button