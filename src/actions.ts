import {
  FETCH_LIST,
  FETCH_SPECIFIC
} from "./types"

export const fetchPeople = (category: string) => (dispatch: any) => {
  fetch("https://swapi.co/api/" + category, {
    method: "GET",
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_LIST,
      payload: data
    }))
}

export const fetchSpecific = (category: string, index: number) => (dispatch: any) => {
  fetch("https://swapi.co/api/" + category, {
    method: "GET",
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_LIST,
      payload: data
    }))
}
