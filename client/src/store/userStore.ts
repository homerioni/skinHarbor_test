import { create } from 'zustand';
import { TUserData } from '@/services/user';

export type TUserInfo = (TUserData & { avatar?: string | null }) | null;

type UserState = {
  userInfo: TUserInfo;
  setUserInfo: (userInfo: TUserInfo) => void;
  updateUserInfo: (patch: Partial<TUserData>) => void;
};

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  updateUserInfo: (patch) =>
    set((state) => ({
      userInfo: state.userInfo ? { ...state.userInfo, ...patch } : state.userInfo,
    })),
}));
