import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Providers } from './providers';
import {
  NftMintView,
} from './views';

export function Routes() {
  const shouldEnableNftPacks = process.env.NEXT_ENABLE_NFT_PACKS;
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route exact path="/">
              <Redirect to="/nft-mint" />
            </Route>
            <Route exact path="/nft-mint" component={() => <NftMintView />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
