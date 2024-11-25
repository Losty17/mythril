export type TextFieldProps = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
  label?: string | React.ReactNode;
  error?: string | React.ReactNode;
  helperText?: string | React.ReactNode;
  type?: "text" | "password" | "email";
};
