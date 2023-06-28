import { MenuItem, Action } from '../../models/Menu'
import { SET_MENU, DEL_MENU_ITEM, ADD_MENU_ITEM } from '../actions/menu'

const initialState = [] as MenuItem[]

export default function moviesReducer(state = initialState, action: Action) {
  const { type, payload } = action

  switch (type) {
    case SET_MENU:
      return payload
    case DEL_MENU_ITEM:
      return  state.filter(menu => menu.id !== payload)
    case ADD_MENU_ITEM:
      return [payload, ...state]
    default:
      return state
  }
}
