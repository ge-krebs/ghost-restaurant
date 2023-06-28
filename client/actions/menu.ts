import { MenuItem } from '../../models/Menu'

import * as api from '../api/menuApi'
import { ThunkAction } from '../store'

export const SET_MENU = 'SET_MENU'
export const DEL_MENU_ITEM = 'DEL_MENU_ITEM'
export const ADD_MENU_ITEM = 'ADD_MENU_ITEM'

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

export function addMenuItem(item: MenuItem) {
  return {
    type: ADD_MENU_ITEM,
    payload: item,
  }
}

//--THUNKS--//
export function getMenuItems(): ThunkAction {
  return async (dispatch) => {
    try {
      const menuArr = await api.getMenuItems()
      dispatch(setMovies(menuArr))
    } catch (err) {
      console.log('an error in the thunk, ' + err)
    }
  }
}

export function delMenuItemThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.deleteMenuItem(id)
      dispatch(delMenuItem(id))
    } catch (err) {
      console.error('an error in the thunk, ' + err)
    }
  }
}

export function addMenuItemThunk(item: MenuItem): ThunkAction {
  return async (dispatch) => {
    console.log(item)
    try {
      const newItem = await api.addMenuItem(item)
      dispatch(addMenuItem(newItem))
    } catch (err) {
      console.error('an error in the thunk, ' + err)
    }
  }
}
