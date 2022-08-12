import { useField } from "@unform/core";
import { useEffect, useRef } from "react";
import { classNames } from "../../utils";
import InputProps from "./props";

const FloatingLabelInput: React.FC<InputProps> = ({
  label,
  children,
  placeholder,
  type,
  name,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div
      className={classNames(
        "relative z-0 mb-1.5",
        className,
        error ? "" : "pb-6"
      )}
    >
      <input
        type={type || "text"}
        className="block pt-3 pb-1.5 px-0 w-full text-sm font-medium duration-200 text-mythril-700 bg-transparent border-0 border-b-2 border-mythril-700/50 focus:border-mythril-700 appearance-none outline-none ring-0 peer"
        placeholder={placeholder || " "}
        name={name}
        ref={inputRef}
      />
      {label && !placeholder && (
        <label className="absolute text-sm text-mythril-700/80 duration-200 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-mythril-700">
          {label}
        </label>
      )}
      <span className="mt-1.5 mb-0 text-xs text-red-600">{error}</span>
      <span className="mt-1.5 mb-0 text-xs text-mythril-500">{children}</span>
    </div>
  );
};

export default FloatingLabelInput;
