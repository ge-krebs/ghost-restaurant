import { MenuItem, Action } from '../../models/Menu'
import { SET_MENU } from '../actions/menu'

const initialState = [] as MenuItem[]

export default function moviesReducer(state = initialState, action: Action) {
  const { type, payload } = action

  switch (type) {
    case SET_MENU:
      return payload
    default:
      return state
  }
}
