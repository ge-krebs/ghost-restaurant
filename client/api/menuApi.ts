import request from 'superagent'
import {MenuItem} from '../../models/Menu'

//--FRONTEND MENU API FUNCTIONS--//

export async function getMenuItems() {
  const res = await request.get('/api/v1/menu')
  if (!res.ok){
    throw new Error()
  }
  return res.body as MenuItem[] // all menu items
}