import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DisplayUsersList from './containers/displayUsersList';
import DisplayUsersDetail from './containers/displayUsersDetail';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/users" component={DisplayUsersList} />
      <Route path="/user/:id" component={DisplayUsersDetail} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
