import imageApi from "duckduckgo-images-api"
import {
  FETCH_LIST,
  RESET_LIST,
  FETCH_IMAGE
} from "./types"

export const fetchList = (category: string, param: string = "") => (dispatch: any) => {
  fetch("http://swapi.co/api/" + category + "/" + param, {
    method: "GET",
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_LIST,
      payload: data
    }))
}

export const resetList = () => (dispatch: any) => {
  dispatch({
    type: RESET_LIST,
    payload: {results: []}
  })
}

export const fetchImage = (query: string) => (dispatch: any) => {
  imageApi.image_search({ query: query, moderate: true }).then(results => console.log(results))
  // imageApi.image_search({ query: query, moderate: true })
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: FETCH_IMAGE,
  //     payload: data
  //   }))
}
