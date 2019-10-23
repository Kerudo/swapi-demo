import React from 'react';
import { connect } from "react-redux"
import Button from '@material-ui/core/Button';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

const List = React.lazy(() => import('./List'));

const link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

class App extends React.Component {
  render () {
    return(
      <div className="App">
        <div className="stars small"></div>
        <div className="stars medium"></div>
        <div className="stars large"></div>

        <div className="wrapper">
          <div className="logo">
            <h1 className="header">STAR<br/>WARS</h1>
            <h2 className="header">EXPLORER</h2>
          </div>
          <nav className="main-nav">
            <Button variant="outlined" color="primary" component={link} to="/people/">
              People
            </Button>
            <Button variant="outlined" color="primary" component={link} to="/planets/">
              Planets
            </Button>
            <Button variant="outlined" color="primary" component={link} to="/movies/">
              Movies
            </Button>
          </nav>
          <div className="content">
            <Route path={"/:category/"} component={List} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: object, ownProps: object) => ({

});

export default connect(mapStateToProps, {})(App);
