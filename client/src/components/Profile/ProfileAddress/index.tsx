'use client';

import { Button, Input } from '@/ui';
import { useModalStore } from '@/store/modalStore';
import { saveUserAddress } from '@/services/user';
import { useUserStore } from '@/store/userStore';
import s from '../styles.module.scss';

export const ProfileAddress = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const updateUserInfo = useUserStore((state) => state.updateUserInfo);

  const setForm = useModalStore((state) => state.setForm);
  const openModal = useModalStore((state) => state.openModal);

  const address = userInfo?.address;

  const clickHandler = () => {
    setForm({ address: address?.address || '' });

    openModal({
      title: address ? 'Edit Address' : 'Add New Address',
      content: (
        <Input
          value={address?.address}
          onChange={(e) => setForm({ address: e.target.value })}
          placeholder="Please enter your address"
          required
        />
      ),
      onSubmit: (value) => {
        if (userInfo) {
          saveUserAddress({
            userId: userInfo.id,
            address: value,
            existingAddressId: address ? address.id : undefined,
          }).then((res) => {
            updateUserInfo({ address: { id: res.data.user, address: res.data.address } });
          });
        }
      },
    });
  };

  return (
    <div className={s.profile__wrapper}>
      <h2>Address</h2>
      {address ? (
        <>
          <p>{address.address}</p>
          <Button className={s.profile__button} onClick={clickHandler}>
            Edit address
          </Button>
        </>
      ) : (
        <>
          <p>You don not have saved address</p>
          <Button className={s.profile__button} onClick={clickHandler}>
            Add new address
          </Button>
        </>
      )}
    </div>
  );
};
