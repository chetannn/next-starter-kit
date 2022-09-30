interface PropTypes {
  className: string;
  onChange: (e: any) => void;
  value: string;
  type?: string;
}

const Input = ({ className, onChange, value, type} : PropTypes) => {
  return (
    <input
      className={`${className} rounded border focus:border-2 focus:outline-none focus:border-purple-600`}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
}

export default Input
