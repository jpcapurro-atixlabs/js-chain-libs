// @flow
import React from 'react';
import AccountInfo from '../containers/AccountInfo';
import SendTransaction from '../containers/SendTransaction';
import RefreshBalance from '../containers/RefreshBalance';
import StakeDelegation from '../containers/StakeDelegation';

export default () => {
  return (
    <div>
      <h2> Account Info</h2>
      <AccountInfo />
      <RefreshBalance />
      <hr />
      <h2> Send funds</h2>
      <SendTransaction />
      <hr />
      <StakeDelegation />
    </div>
  );
};
