import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

import './transactionOutput.scss';
import Amount from '../../Commons/Amount/Amount';
import AccountLink from '../../Commons/AccountLink/AccountLink';

const TransactionOutput = ({ transactionOutput }) => (
  <div className="transactionUtxo">
    <div>
      <h5>Account </h5>
      <div>
        <AccountLink id={transactionOutput.address.id} />
      </div>
    </div>
    <div>
      <h5>Amount </h5>
      <Amount decimalAmount={transactionOutput.amount} />
    </div>
  </div>
);

export default createFragmentContainer(
  TransactionOutput,
  // Each key specified in this object will correspond to a prop available to the component
  {
    transactionOutput: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment TransactionOutput_transactionOutput on TransactionOutput {
        amount
        address {
          id
        }
      }
    `
  }
);
