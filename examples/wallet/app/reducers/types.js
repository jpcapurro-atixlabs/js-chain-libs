// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type {
  Address,
  Balance,
  Counter,
  PrivateKey,
  Delegation,
  Identifier
} from '../models';

export type Action = {
  type: string
};

export type Store = ReduxStore<AppState, Action>;
export type GetState = () => AppState;
export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;
export type Thunk<A> = ((Dispatch, ?GetState) => Promise<void> | void) => A;

export type AppState = {
  account: Account,
  nodeSettings: NodeSettings
};

export type Account = AccountKeys & AccountState;

export type AccountKeys = {
  address: Address,
  privateKey: PrivateKey,
  identifier: Identifier
};

export type AccountState = {
  balance: Balance,
  counter: Counter,
  delegation: Delegation
};

export type NodeSettings = {
  block0Hash: string,
  fees: {
    certificate: number,
    coefficient: number,
    constant: number
  }
};
