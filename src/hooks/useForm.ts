const useForm = () => {
  const getFormData = (form: HTMLFormElement) => {
    const data: { [name: string]: string } = {};
    const fields: { [name: string]: HTMLInputElement } = {};

    form.childNodes.forEach((node) => {
      node.childNodes.forEach((childNode) => {
        if (childNode.nodeName === "INPUT") {
          const input = childNode as HTMLInputElement;
          data[input.name] = input.value;
          fields[input.name] = input;
        }
      });
    });

    return { data, fields };
  };

  return getFormData;
};

export default useForm;
