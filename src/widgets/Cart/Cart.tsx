import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { CartProduct, Product } from '../../types/product'

export interface CartProps {
  products: CartProduct[]
  incrementProductCount: (p: Product['id']) => void
  decrementProductCount: (p: Product['id']) => void
}



export function Cart({ products, incrementProductCount, decrementProductCount }: CartProps) {
  const CartProductRow =(p: CartProduct, k: number) => {
  return (
    <TableRow key={k}>
      <TableCell>{p.title}</TableCell>
      <TableCell>${p.price}</TableCell>
      <TableCell>
        <Box style={{display: 'flex', alignItems: 'center'}}>
        <Button onClick={() => decrementProductCount(p.id)}>-</Button>
        <Box>{p.count}</Box>
        <Button onClick={() => incrementProductCount(p.id)}>+</Button>
        </Box>
      </TableCell>
      <TableCell>${p.price*p.count}</TableCell>
    </TableRow>
  )
  }
  
  return (
    <Box>
      <Box>
        <Typography variant='h3'>Cart</Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p, i) => CartProductRow(p, i))}
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{products.reduce((acc: number, num: CartProduct) => acc+(num.count*num.price), 0)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}