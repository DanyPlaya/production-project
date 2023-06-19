import 'app/styles/index.scss';
import { FC, ReactNode } from 'react';

interface Props{
  children: ReactNode
}
export const StyleDecorator:FC<Props> = ({ children }) => (
    <div className="app light">
        {children}
    </div>
);
