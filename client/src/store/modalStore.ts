import { create } from 'zustand';
import React from 'react';

type ModalState = {
  isOpen: boolean;
  title: string;
  content: React.ReactNode | null;
  form: { address: string };
  onSubmit?: (form: { address: string }) => void;
  setForm: ({ address }: { address: string }) => void;
  openModal: ({
    title,
    content,
    onSubmit,
  }: {
    title: string;
    content: React.ReactNode;
    onSubmit: (form: { address: string }) => void;
  }) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  content: null,
  form: { address: '' },
  onSubmit: undefined,
  setForm: (form) => set({ form }),
  openModal: ({ title, content, onSubmit }) => set({ isOpen: true, title, content, onSubmit }),
  closeModal: () => set({ isOpen: false, title: '', content: null, onSubmit: undefined }),
}));
