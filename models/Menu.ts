export interface MenuItem {
  id?: number
  item: string //name
  price: number
  description: string
  image: string
}

export type Action =
  | { type: 'SET_MENU'; payload: MenuItem[] }
  | { type: 'DEL_MENU_ITEM'; payload: number }
  | { type: 'ADD_MENU_ITEM'; payload: MenuItem }
