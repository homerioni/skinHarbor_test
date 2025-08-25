import { Button } from '@/ui';
import sMain from '../styles.module.scss';
import s from './styles.module.scss';

export const ProfileTrade = () => (
  <div className={sMain.profile__wrapper}>
    <h2>Trade URL</h2>
    <p className={s.tradeLink}>
      https://steamcommunity.com/id/homerion13/tradeoffers/privacy#trade_offer_access_url
    </p>
    <Button className={`${sMain.profile__button} ${sMain['profile__button--min']}`}>
      Update Trade URL
    </Button>
  </div>
);
