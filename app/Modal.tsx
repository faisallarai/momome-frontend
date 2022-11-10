'use client';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { Fragment, useContext } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { ModalContext } from './providers';

export default function MyModal() {
  const router = useRouter();
  const { modal, setModal, message, status } = useContext(ModalContext);

  function closeModal() {
    setModal(false);
  }

  function viewTransfer() {
    setModal(false);
    router.push('/transfers');
    router.refresh();
  }

  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity"
            aria-hidden="true"
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3">
                  <div className="cursor-pointer flex text-end justify-end">
                    <HiOutlineX
                      className="h-[22px] text-white"
                      onClick={closeModal}
                    />
                  </div>
                </Dialog.Title>

                <div className="mt-4">
                  {status && status ? (
                    <p className="text-green-500">{message}</p>
                  ) : (
                    <p className="text-red-500">{message}</p>
                  )}
                  <button
                    onClick={viewTransfer}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    View Transfers
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
