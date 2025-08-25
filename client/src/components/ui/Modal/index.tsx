'use client';

import { useModalStore } from '@/store/modalStore';
import { Button } from '@/ui';
import s from './styles.module.scss';

export const Modal = () => {
  const { isOpen, title, content, form, onSubmit, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className={s.modal}>
      <div className={s.modal__bg} onClick={closeModal} />
      <div className={s.modal__wrapper}>
        <h2 className={s.modal__title}>{title}</h2>
        <button className={s.modal__close} onClick={closeModal} />
        <div className={s.modal__content}>
          {content}
          <Button
            onClick={() => {
              if (onSubmit && form.address) {
                onSubmit(form);
              }

              closeModal();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
