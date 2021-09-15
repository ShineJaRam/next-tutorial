import styles from './alert.module.css';
import { ReactNode } from 'react';

const Alert = ({ children, type }: { children: ReactNode; type: string }) => {
  return <div>{children}</div>;
};

export default Alert;
