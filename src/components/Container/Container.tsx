import { FC, ReactNode } from 'react';
import { BrowserRouter } from "react-router-dom";
 
import './Container.scss';

interface IContainer {
    children: ReactNode
}

export const Container: FC<IContainer> = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
};
