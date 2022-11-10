'use client';
import React, { useState, createContext } from 'react';

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({
  modal: false,
  setModal: (modal: boolean) => {},
  status: false,
  setStatus: (status: boolean) => {},
  message: '',
  setMessage: (message: string) => {},
});

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  return (
    <ModalContext.Provider
      value={{ modal, setModal, status, setStatus, message, setMessage }}
    >
      {children}
    </ModalContext.Provider>
  );
};
