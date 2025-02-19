const Input = ({
  label,
  type,
  id,
  className,
  placeholder,
  value,
  min,
  max,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-800 hidden">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:border-2 focus:border-accent p-2.5${
          className ? " " + className : ""
        }`}
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        required={required}
        {...props}
      />
    </div>
  );
};


export default Input;