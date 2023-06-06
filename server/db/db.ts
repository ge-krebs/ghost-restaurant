import db from './connection'

import { MenuItem } from '../../models/Menu'

export function getMenuItems(): Promise<MenuItem[]> {
  return db<MenuItem>('menu').select() //all
}
