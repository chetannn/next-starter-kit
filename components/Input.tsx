const Input = ({ className, ...props }) => {
  return (
    <input
      className={`${className} rounded border focus:border-2 focus:outline-none focus:border-purple-600`}
      {...props}
    />
  );
}

export default Input
