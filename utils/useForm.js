import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const clearAfterSubmit = () => {
    const actualVal = { ...values };
    const actualErrors = { ...errors };
    for (const key in actualErrors) {
      actualErrors[key] = '';
    }
    for (const key in actualVal) {
      actualVal[key] = '';
    }
    setValues(actualVal);
    setErrors(actualErrors);
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    clearAfterSubmit,
  };
};

export default useForm;
