// package imports
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import thunk from "redux-thunk"
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ThemeProvider } from '@material-ui/styles';

// local imports
import theme from './theme'
import reducer from "./reducer"
import './index.css';

// lazy load imports
const App = React.lazy(() => import('./App'));

// set up redux store
const history = createHistory()
const middleware = [thunk, routerMiddleware(history)]
export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

// attach our app to the DOM and set up our root route
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
