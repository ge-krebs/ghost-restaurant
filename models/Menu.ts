export interface MenuItem {
  id?: number
  item: string //name
  price: number
  description: string
  image: string
}

export type Action = { type: 'SET_MENU'; payload: MenuItem[] }
