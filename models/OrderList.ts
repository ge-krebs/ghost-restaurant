export interface OrderList {
  id?: number
  name: string
  item_id?: number
  locker_id?: number
  completed?: boolean
}

export interface NewOrder {
  name: string
  item_id?: number
  locker_id?: number
  completed?: boolean
}