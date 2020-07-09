import React from 'react'
import { connect } from 'react-redux'
import { push, ConnectedRouter } from 'connected-react-router'
import AppContainer from './features/appContainer'
import pageContributions from './pages'

const _App = ({ history, _push }) =>
  <ConnectedRouter history={history} >
    <AppContainer
      push={_push}
      pageContributions={pageContributions} />
  </ConnectedRouter>

// Exports
export default connect(null, { _push: push })(_App);