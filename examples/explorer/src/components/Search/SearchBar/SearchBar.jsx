import React, { useState } from 'react';
import { navigate } from '@reach/router';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import './searchBar.scss';
import { isBlockNumber } from '../../../helpers/blockHelper';

const onEpochSearchClick = searchValue => {
  const baseUrl = 'epoch';

  navigate(`/${baseUrl}/${searchValue}`);
};

const onBlockSearchClick = searchValue => {
  let baseUrl = 'block';

  if (isBlockNumber(searchValue)) {
    baseUrl = 'block/chainLength';
  }

  navigate(`/${baseUrl}/${searchValue}`);
};

const onTxSearchClick = searchValue => {
  const baseUrl = 'tx';
  navigate(`/${baseUrl}/${searchValue}`);
};

const onAddressSearchClick = searchValue => {
  const baseUrl = 'address';
  navigate(`/${baseUrl}/${searchValue}`);
};

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Jumbotron>
      <div className="searchContainer">
        <h1> Search for transactions or blocks </h1>
        <div className="searchForm">
          <Form.Control
            type="text"
            onChange={event => setSearchValue(event.target.value)}
            placeholder="Search by block hash, chain length and transaction hash..."
          />
          <ButtonGroup>
            <Button variant="primary" onClick={() => onEpochSearchClick(searchValue)}>
              Epoch
            </Button>
            <Button variant="primary" onClick={() => onBlockSearchClick(searchValue)}>
              Block
            </Button>
            <Button variant="primary" onClick={() => onTxSearchClick(searchValue)}>
              Transaction
            </Button>
            <Button variant="primary" onClick={() => onAddressSearchClick(searchValue)}>
              Address
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Search;
