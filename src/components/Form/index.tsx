import { Button } from "../buttons";
import FormProps from "./props";

const Form: React.FC<FormProps> = ({
  className,
  formName,
  submitLabel,
  onSubmit,
  children,
}) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      <Button label={submitLabel || "Submit"} className="w-full" />
    </form>
  );
};

export default Form;
