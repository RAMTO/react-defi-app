import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Styleguide from './Styleguide';

import './scss/style.scss';

function App() {
  return (
    <Router>
      <div className="section py-6 py-md-10 py-mg-15">
        <div className="container">
          <div>
            <h1 className="text-mega">
              Welcome to Calculator Project Starter!
            </h1>
          </div>

          <Switch>
            <Route exact path="/">
              <div className="mt-4">
                <h2 className="text-subheader d-1">
                  Made with 💜 by{' '}
                  <a
                    href="https://www.dobreff.net/"
                    className="link-primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Martin Dobrev
                  </a>
                </h2>
              </div>

              <div className="mt-4">
                <ul>
                  <li>
                    <Link className="link-primary" to="/styleguide">
                      &raquo; Styleguide
                    </Link>
                  </li>
                </ul>
              </div>
            </Route>
            <Route path="/styleguide">
              <Styleguide />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
