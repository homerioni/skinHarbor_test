'use client';

import { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';
import s from './styles.module.scss';

type InputProps = {
  textarea?: boolean;
} & (
  | ({ textarea?: false } & InputHTMLAttributes<HTMLInputElement>)
  | ({ textarea: true } & TextareaHTMLAttributes<HTMLTextAreaElement>)
);

export const Input = ({ textarea, value, onChange, ...rest }: InputProps) => {
  const [myValue, setMyValue] = useState(value ?? '');

  const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setMyValue(e.target.value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    onChange?.(e);
  };

  return (
    <label className={s.main}>
      {textarea ? (
        <textarea
          className={s.textarea}
          value={myValue}
          onChange={changeHandler}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={s.input}
          value={myValue}
          onChange={changeHandler}
          type="text"
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
};
