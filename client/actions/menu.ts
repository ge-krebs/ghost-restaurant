import { MenuItem } from '../../models/Menu'

import * as api from "../api/menuApi"
import { ThunkAction } from "../store"

export const SET_MENU = 'SET_MENU'

export function setMovies(menu: MenuItem[]){
  return {
    type: SET_MENU,
    payload: menu
  }
}

//--THUNKS--//
export function getMenuItems(): ThunkAction {
  return async (dispatch) => {
    try {
      //call api function and receive our arr of data
      const menuArr = await api.getMenuItems()
      //dispatch the action to abv function that returns
      //type and payload as movies for the reducers
      dispatch(setMovies(menuArr))
    } catch(err) {
      console.log('an error in the thunk, '+ err)
    }
  }
}