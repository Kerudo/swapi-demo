import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory'
import reducer from "./reducer"
import thunk from "redux-thunk"
import {
  ConnectedRouter,
  routerMiddleware,
  push
} from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import theme from './theme'
import { ThemeProvider } from '@material-ui/styles';

const history = createHistory()

const middleware = [thunk, routerMiddleware(history)]

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
