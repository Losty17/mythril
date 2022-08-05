import { Button } from "../buttons";
import FormProps from "./props";

const FormContainer: React.FC<FormProps> = ({
  className,
  formName,
  submitLabel,
  onSubmit,
  children,
}) => {
  return <div className={className}>{children}</div>;
};

export default FormContainer;
