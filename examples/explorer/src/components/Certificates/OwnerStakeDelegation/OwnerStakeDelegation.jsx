import React from 'react';
import Table from 'react-bootstrap/Table';

import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

import '../../generalStyling.scss';

const OwnerStakeDelegation = ({ certificate }) => {
  return (
    <div className="keyValueTable">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Type:</td>
            <td>{certificate.__typename}</td>
          </tr>
          <tr>
            <td>Pool Id:</td>
            <td>{certificate.pool.id}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default createFragmentContainer(
  OwnerStakeDelegation,
  // Each key specified in this object will correspond to a prop available to the component
  {
    certificate: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment OwnerStakeDelegation_certificate on OwnerStakeDelegation {
        __typename
        pool {
          id
        }
      }
    `
  }
);
