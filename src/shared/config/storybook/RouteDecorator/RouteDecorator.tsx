import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props{
  children: ReactNode
}
export const RouteDecorator: FC<Props> = ({ children }) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
);
