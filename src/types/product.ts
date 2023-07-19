export interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
}

export type CartProduct = Pick<Product, 'id' | 'price' | 'title'> & {
  count: number
}