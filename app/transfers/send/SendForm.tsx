'use client';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyModal from '../../Modal';
import { ModalContext } from '../../providers';

enum Bank {
  MTN = 'MTN',
  VOD = 'VOD',
  AIRTELTIGO = 'AIRTELTIGO',
}

enum Currency {
  GHS = 'GHS',
}

type Inputs = {
  name: string;
  account_number: string;
  currency: Currency;
  email: string;
  bank_code: Bank;
  amount: number;
  reason: string;
};

function SendForm() {
  const { modal, setModal, setMessage, setStatus } = useContext(ModalContext);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(process.env.NEXT_PUBLIC_TOKEN);
    const res = await fetch('http://localhost:8000/payments/transfer/send/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(res, 'res');
    if (res.status === 201) {
      setModal(true);
      setMessage(result['message']);
      setStatus(result['status']);
    } else {
      setModal(true);
      setStatus(false);
      setMessage(res.statusText + ' ' + result.detail);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-grow space-y-3 mt-1 p-2"
      >
        <h3 className="text-xl font-medium text-white">Transfer </h3>
        <div>
          <input
            type="text"
            className="flex shadow-sm border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            placeholder="John Doe"
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
              pattern: {
                value: /^[A-Za-z _-]/i,
                message: 'Name is not valid',
              },
              minLength: {
                value: 1,
                message: 'Name is too short',
              },
              maxLength: {
                value: 25,
                message: 'Name is too long',
              },
            })}
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.name && (
              <span className="font-medium">{errors.name?.message}</span>
            )}
          </p>
        </div>
        <div>
          <select
            {...register('bank_code', {
              required: {
                value: true,
                message: 'Bank Code is required',
              },
            })}
            className="flex shadow-sm border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          >
            <option value="MTN">MTN</option>
            <option value="VOD">VOD</option>
            <option value="AIRTELTIGO">AIRTELTIGO</option>
          </select>
          <p>{errors.bank_code && <span>{errors.bank_code?.message}</span>}</p>
        </div>
        <div>
          <input
            className="flex shadow-sm border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            type="tel"
            placeholder="0240000000"
            {...register('account_number', {
              required: {
                value: true,
                message: 'Account Number is required',
              },
              pattern: {
                value: /^[0-9]{10}/i,
                message: 'Account Number is not valid',
              },
              minLength: {
                value: 10,
                message: 'Account Number is too short',
              },
              maxLength: {
                value: 15,
                message: 'Account Number is too long',
              },
            })}
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.account_number && (
              <span className="font-medium">
                {errors.account_number?.message}
              </span>
            )}
          </p>
        </div>
        <div>
          <select
            {...register('currency', {
              required: {
                value: true,
                message: 'Currency is required.',
              },
            })}
            className="flex shadow-sm border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          >
            <option value="GHS">GHS</option>
          </select>
          <p className="mt-1 text-sm text-red-600">
            {errors.currency && (
              <span className="font-medium">{errors.currency?.message}</span>
            )}
          </p>
        </div>
        <div>
          <input
            className="flex shadow-sm border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            type="number"
            step=".01"
            placeholder="10"
            {...register('amount', {
              required: {
                value: true,
                message: 'Amount is required',
              },
              pattern: {
                value: /^[0-9.]/i,
                message: 'Amount is not valid',
              },
              min: {
                value: 10,
                message: 'Amount is too low',
              },
              max: {
                value: 5000,
                message: 'Name is too huge',
              },
            })}
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.amount && (
              <span className="font-medium">{errors.amount?.message}</span>
            )}
          </p>
        </div>
        <div>
          <input
            className="flex shadow-sm border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            type="email"
            placeholder="johndoe@gmail.com"
            {...register('email')}
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.email && (
              <span className="font-medium">{errors.email?.message}</span>
            )}
          </p>
        </div>
        <div>
          <textarea
            className="flex shadow-sm border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            rows={2}
            {...register('reason')}
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.reason && (
              <span className="font-medium">{errors.reason?.message}</span>
            )}
          </p>
        </div>

        <button
          type="submit"
          className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Send
        </button>
      </form>
      {modal && <MyModal />}
    </>
  );
}

export default SendForm;
