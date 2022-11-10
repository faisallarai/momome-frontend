export interface Bank {
  id: number;
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: string | undefined;
  pay_with_bank: boolean;
  active: boolean;
  country: string;
  currency: string;
  type: string;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Recipient {
  id: number;
  currency: string;
  recipient_code: string;
  type: string;
  active: boolean;
  is_deleted: boolean;
  account_number: string;
  name: string;
  account_name: string;
  bank_code: string;
  bank_name: string;
  email: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: number;
  recipient: Recipient;
  recipient_code: string;
  name: string;
  bank_code: string;
  bank_name: string;
  account_name: string | undefined;
  account_number: string;
  currency: string;
  email: string | undefined;
  type: string;
  active: boolean;
  is_deleted: boolean;
  transfer_code: string;
  transferred_at: string | undefined;
  amount: number;
  reason: string;
  description: string | undefined;
  source: string;
  reference: string;
  status: string;
  fee_charged: number;
  created_at: string;
  updated_at: string;
}

export interface Transfer {
  id: number;
  recipient: Recipient;
  transferred_at: string | undefined;
  amount: number;
  transfer_code: string;
  currency: string;
  reason: string;
  reference: string;
  status: string;
  source: string;
  created_at: string;
  updated_at: string;
}
