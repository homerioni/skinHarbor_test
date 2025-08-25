import { ProfileAddress } from './ProfileAddress';
import { ProfileInfo } from './ProfileInfo';
import { ProfileOrders } from './ProfileOrders';
import { ProfileTrade } from './ProfileTrade';
import s from './styles.module.scss';

export const Profile = () => {
  return (
    <section className={s.profile}>
      <div className={`${s.profile__container} container`}>
        <div>
          <ProfileInfo />
          <ProfileAddress />
        </div>
        <div>
          <ProfileTrade />
          <ProfileOrders />
        </div>
      </div>
    </section>
  );
};
