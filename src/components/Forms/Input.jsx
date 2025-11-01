import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      value,
      onChange,
      icon,
      fullWidth = true,
      size = "md",
      readOnly = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      sm: "py-1.5 px-2 text-sm",
      md: "py-2 px-3 text-sm sm:text-base",
      lg: "py-3 px-4 text-base",
    };

    return (
      <div className={`w-full ${fullWidth ? "" : "inline-block"} ${className}`}>
        {label && (
          <label className="block text-gray-700 text-sm mb-1">{label}</label>
        )}

        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className={`border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none transition ${
              sizeMap[size]
            } ${icon ? "pl-9 pr-3" : ""}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

export default Input;
