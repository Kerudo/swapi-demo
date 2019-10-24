// package imports
import React, { Suspense } from 'react';
import { connect } from "react-redux"
import Button from '@material-ui/core/Button';
import { Link as RouterLink, LinkProps as RouterLinkProps, Route } from 'react-router-dom';

// local imports
import './App.css';

// lazy load imports
const ItemList = React.lazy(() => import('./ItemList'));
const ItemDetail = React.lazy(() => import('./ItemDetail'));

// react-redux-router-mui snippet to make buttons work nicely with routes
const link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

// define which api routes will be fetched and which fields will be shown
// the first item in the array will be used as the field shown when displayed as a list
// it will also be what shows up as the header for the detail view
const fieldMap: any = {
  people: [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "gender",
    "birth_year",
  ],
  planets: [
    "name",
    "terrain",
    "population",
  ],
  films: [
    "title",
    "director",
    "producer",
    "release_date",
  ],
}

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
            <Button variant="outlined" color="primary" component={link} to="/films/">
              Films
            </Button>
          </nav>
          <div className="content">
            <Route path={"/:category/"} render={
              (props: any) => (
                <Suspense fallback="">
                  <ItemList
                    key={props.match.params.category} {...props}
                    displayField={fieldMap[props.match.params.category][0]} />
                </Suspense>
              )
            } />
            <Route path={"/:category/:id/"} render={
              (props: any) => (
                <Suspense fallback="">
                  <ItemDetail
                    key={props.match.params.category + props.match.params.id} {...props}
                    displayFields={fieldMap[props.match.params.category]} />
                </Suspense>
              )
            } />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: object, ownProps: object) => ({

});

export default connect(mapStateToProps, {})(App);
