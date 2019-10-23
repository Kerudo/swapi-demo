import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const initialState = {

}

function appReducer(state = initialState, action : object) : object {
  return state
}

export default combineReducers( {
  router: routerReducer,
  app: appReducer
});
