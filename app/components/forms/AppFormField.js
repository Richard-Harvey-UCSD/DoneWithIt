import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const {
    errors,
    handleChange,
    setFieldTouched,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        // autoCapitalize='none'
        // autoCorrect={false}
        // icon='email'
        // keyboardType='email-address'
        onBlur={() => setFieldTouched(name)}
        // onChangeText={handleChange(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      // placeholder='Email'
      // textContentType='emailAddress'
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;