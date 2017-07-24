
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';


import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>
  <div>
    <Route  path='/' component={Base} />
    <Route exact path='/' component={() => (
  Auth.isUserAuthenticated() ? (
    <Redirect to="/dashboard"/>
  ) : (
    <HomePage />
  )
)} />
    <Route path='/login' component={LoginPage} />
    <Route path='/signup' component={SignUpPage} />
    {/* <Route path='/logout' render={() => (
  Auth.deauthenticateUser() ? (
    <Redirect to={HomePage}/>
  ) : (
    <HomePage />
  )
)}/> */}
  </div>
</Router>
  </MuiThemeProvider>), document.getElementById('app'));
