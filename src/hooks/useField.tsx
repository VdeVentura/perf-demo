import { FieldHookConfig, useField as useFormikField } from 'formik';
import { useState } from 'react';

function useField<Val = any>(props: FieldHookConfig<Val>) {
  const [active, setActive] = useState(false);
  const [field, meta, helpers] = useFormikField<Val>(props);
  const onBlur = (e: any) => {
    setActive(false);
    return field.onBlur(e);
  };
  const onFocus = () => {
    setActive(true);
  };

  return [{ ...field, active, onBlur, onFocus }, meta, helpers] as const;
}

export default useField;
