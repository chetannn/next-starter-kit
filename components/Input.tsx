interface PropTypes {
  className: string;
  onChange: (e: any) => void;
  value: string;
  type?: string;
  placeholder?:string;
}

const Input = ({ className, onChange, value, type, placeholder} : PropTypes) => {
  return (
    <input
      className={`${className} rounded border focus:border-2 focus:outline-none focus:border-purple-600`}
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input
