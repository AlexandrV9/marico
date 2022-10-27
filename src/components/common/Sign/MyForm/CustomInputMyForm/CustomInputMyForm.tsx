import React from 'react';

import StyledCustomInputMyForm from './StyledCustomInputMyForm';

interface CustomInputMyFormProps {
  field: any
};

export const CustomInputMyForm = ({
  field,
  ...props
}: any) => {
  console.log(field, props)
  return (
    <StyledCustomInputMyForm>
      <input {...props}/>
      <label>
        <img />
      </label>
    </StyledCustomInputMyForm>
  );
};