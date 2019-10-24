import {
  FETCH_LIST,
  RESET_LIST
} from "./types"

export const fetchList = (category: string) => (dispatch: any) => {
  fetch("/api/" + category, {
    method: "GET",
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_LIST,
      payload: data
    }))
}

export const fetchSpecific = (category: string, index: number) => (dispatch: any) => {
  dispatch({
    type: RESET_LIST,
    payload: {}
  })
}
