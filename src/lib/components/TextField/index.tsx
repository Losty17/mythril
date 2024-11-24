import { TextFieldProps } from "./types";

const TextField = ({
  startIcon,
  endIcon,
  placeholder,
  label,
  error,
  helperText,
  type = "text",
}: TextFieldProps) => {
  return (
    <span>
      {label && (
        <div className="label">
          {typeof label === "string" ? (
            <span className="label-text">{label}</span>
          ) : (
            label
          )}
        </div>
      )}
      <label className="input input-bordered flex items-center gap-3">
        {startIcon}
        <input type={type} className="grow" placeholder={placeholder} />
        {endIcon}
      </label>
      {helperText && (
        <div className="label">
          {typeof helperText === "string" ? (
            <span className="label-text">{helperText}</span>
          ) : (
            helperText
          )}
        </div>
      )}
      {error && (
        <div className="label">
          {typeof error === "string" ? (
            <span className="label-text text-error">{error}</span>
          ) : (
            error
          )}
        </div>
      )}
    </span>
  );
};

export default TextField;
