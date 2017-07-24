import React, { PropTypes } from 'react';
// import { Link, IndexLink } from 'react-router';
// import { NavLink ,Link, Route, BrowserRouter, withRouter as Router } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, NavLink} from 'react-router-dom';
import Auth from '../modules/Auth';


const Base = withRouter(({ history }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/">React App</NavLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <button onClick={() => {
        Auth.deauthenticateUser(() => history.push('/'))
      }}>Log out</button>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>



  </div>

));


export default Base;
