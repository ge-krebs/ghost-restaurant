import { MenuItem } from '../../models/Menu'

import * as api from '../api/menuApi'
import { ThunkAction } from '../store'

export const SET_MENU = 'SET_MENU'
export const DEL_MENU_ITEM = 'DEL_MENU_ITEM'

export function setMovies(menu: MenuItem[]) {
  return {
    type: SET_MENU,
    payload: menu,
  }
}

export function delMenuItem(id: number) {
  return {
    type: DEL_MENU_ITEM,
    payload: id,
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
    } catch (err) {
      console.log('an error in the thunk, ' + err)
    }
  }
}

export function delMovieThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.deleteMenuItem(id)
      dispatch(delMenuItem(id))
    } catch (err) {
      console.error('an error in the thunk, ' + err)
    }
  }
}
