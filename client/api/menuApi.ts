import request from 'superagent'
import { MenuItem } from '../../models/Menu'

//--FRONTEND MENU API FUNCTIONS--//

export async function getMenuItems() {
  const res = await request.get('/api/v1/menu')
  if (!res.ok) {
    throw new Error()
  }
  return res.body as MenuItem[] // all menu items
}

export async function deleteMenuItem(id: number) {
  await request.delete(`/api/v1/menu/${id}`)
}

export async function addMenuItem(data: MenuItem) {
  const res = await request.post('/api/v1/menu').send(data) //send item in here
  if (!res.ok) {
    throw new Error()
  }
  return res.body
}
