import s from './styles.module.scss';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
};

export const Button = ({ children, type = 'button', className, onClick }: ButtonProps) => (
  <button className={`${s.main} ${className ?? ''}`} type={type} onClick={onClick}>
    {children}
  </button>
);
