import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  FETCH_LIST,
  RESET_LIST,
  FETCH_IMAGE
} from "./types"

const initialState = {
  list_data: {
    results: []
  },
  image_data: {

  }
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
    case FETCH_IMAGE:
      return {
        ...state,
        image_data: action.payload
      }
    default:
      return state
  }
}

export default combineReducers( {
  router: routerReducer,
  app: appReducer
});
