import React from "react";

export default interface FormProps extends React.PropsWithChildren {
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  submitLabel?: string;
  formName?: string;
}
