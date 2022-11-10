import React from 'react';
import { BsCash } from 'react-icons/bs';
import moment from 'moment';
import { Transfer } from '../../typings';

function TransferLine(props: Transfer) {
  const { recipient, amount, currency, status, created_at, transfer_code } =
    props;
  return (
    <div className="flex justify-between bg-gray-800 p-4 rounded-xl bg-gradient-to-br hover:cursor-pointer hover:scale-105 transition transform duration-100 ease-in-out">
      <div className="rounded-full bg-gray-500 max-w-[50px] p-4">
        <BsCash className="text-white" />
      </div>

      <div className="flex flex-col justify-items-center">
        <p className="text-white text-sm">{recipient.account_name}</p>
        <span className="text-gray-500 text-xs">
          {recipient.account_number}
        </span>
      </div>

      <div className="flex flex-col justify-items-center">
        <p className="text-white text-sm">
          {currency} {amount}
        </p>
        <span className="text-gray-500 text-xs">{transfer_code}</span>
      </div>

      <div className="flex flex-col justify-items-center">
        <p className="text-white text-sm">
          {status === 'success' ? (
            <span className="text-green-500">{status}</span>
          ) : (
            <span className="text-red-500">{status}</span>
          )}
        </p>
        <span className="text-gray-500 text-xs">
          {moment(created_at).format('MMM Do YY')}
        </span>
      </div>
    </div>
  );
}

export default TransferLine;
