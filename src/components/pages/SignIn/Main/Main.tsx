import React from 'react';
import { MyForm } from '../../../common/Sign/MyForm';
import { 
  dataSign, 
  dataButtonsSign
} from "../../../../utils/constants";

import StyledMain from './StyledMain';
import { Button } from '../../../common/Button';

interface MainProps {
  type: string,
};

export const Main = ({
  type
}: MainProps) => {

  return (
    <StyledMain>
      <h1>{dataSign[type].title}</h1>
      <p className='text-one'>{dataSign.in.subtitle}</p>
      <MyForm type = "in"/>
      <p className='or'>Or</p>
      <p className='text-two'>
        {type === "in" ? "Log in " : "Sign up "}
        with...
      </p>
      <div className='box-buttons'>
        {dataButtonsSign.map((data) => (
          <Button classBtn='fifth' key={data.id}>
            <img src={data.pathIcon} alt={data.altText}/>
            <p>{data.text}</p>
          </Button>
        ))}
      </div>
      <p className='conclusion'>{dataSign.in.conclusion}</p>
    </StyledMain>
  );
};