// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import config from 'config';
import type { Store } from '../reducers/types';
import Routes from '../Routes';
import { updateAccountState } from '../actions/account';
import { setStakePools } from '../actions/stakePools';

type Props = {
  store: Store,
  history: {}
};

const Root = ({ store, history }: Props) => {
  // This does not take into consideration what happeneda to the last request
  // if the previous request didn't finish, it just launches another one.
  // this of course causes race conditions and it can be problematic to open infinite
  // connections, but in the near future we should subscribe to the gRPC gossip and
  // no longer require polling.
  store.dispatch(setStakePools());
  setInterval(
    () => store.dispatch(updateAccountState()),
    config.get('accountPollingInterval')
  );
  setInterval(
    () => store.dispatch(setStakePools()),
    config.get('stakePoolsPollingInterval')
  );
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(Root);
