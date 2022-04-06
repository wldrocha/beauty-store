import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import RecoveryPassWord from '../containers/RecoveryPassWord'
import '../styles/global.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-pass" component={RecoveryPassWord} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
