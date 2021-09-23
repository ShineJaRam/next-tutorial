import styles from 'alert.module.css';
import cn from 'classnames';
import { ReactElement } from 'react';

const Alert = ({
  children,
  type,
}: {
  children: ReactElement;
  type: string;
}) => {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
