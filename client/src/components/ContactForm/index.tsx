import { Button, Input } from '@/ui';
import s from './styles.module.scss';

type ContactFormProps = {
  text: string;
};

export const ContactForm = ({ text }: ContactFormProps) => {
  const textArray = text.split('\n\n');

  return (
    <section className={s.contactForm}>
      <div className={`${s.contactForm__container} container`}>
        <div className={s.contactForm__textWrapper}>
          <h3 className={s.contactForm__title}>{textArray[0] ?? ''}</h3>
          {textArray.splice(1).map((item, i) => (
            <p key={i} className={s.ContactForm__text}>
              {item}
            </p>
          ))}
        </div>
        <form className={s.contactForm__form}>
          <Input placeholder="Please enter your name" required />
          <Input placeholder="Please enter your email" required />
          <Input textarea placeholder="Please enter your message" required />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};
