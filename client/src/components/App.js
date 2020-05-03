import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from './../utils/setAuthToken';

import Alert from './layout/Alert';
import DashboardPage from './dashboard/DashboardPage';
import UserPage from './user/UserPage';
import NotFoundPage from './layout/NotFoundPage';

import '../styles/main.scss';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Alert />
          <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route
              path="/user/:form"
              render={(props) => <UserPage {...props} isAuthed={true} />}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
