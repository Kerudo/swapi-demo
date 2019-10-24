import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  FETCH_LIST,
  RESET_LIST
} from "./types"

const initialState = {
  list_data: {
    results: []
  },
  specific_data: {}
}

function appReducer(state = initialState, action : any) : any {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        list_data: action.payload
      }
    case RESET_LIST:
      return {
        ...state,
        list_data: action.payload
      }
    default:
      return state
  }
}

export default combineReducers( {
  router: routerReducer,
  app: appReducer
});
