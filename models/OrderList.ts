export interface OrderList {
  id?: number
  name: string
  item_id?: number
  locker_id?: number
  complete?: boolean
  item?: string
}

export interface NewOrder {
  name: string
  item_id?: number
  locker_id?: number
  complete?: boolean
}