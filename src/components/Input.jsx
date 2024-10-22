export const Input = ({ label, id, placeholder, value, onChange, type = "text", required = false, ...props }) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-800">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:border-2 focus:border-accent block w-full p-2.5${
          className ? " " + className : ""
        }`}
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        required={required}
        {...props}
      />
    </div>
  );
};
