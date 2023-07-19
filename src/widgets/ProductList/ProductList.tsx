import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Product } from '../../types/product'
import styled from '@emotion/styled'
import { ProductImage } from '../ProductImage'

export interface ProductListProps {
  products: Product[]
  addToCart: (pid: Product['id']) => void
}

export function ProductList({ products, addToCart }: ProductListProps) {
  
  const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    max-width: 75rem;
    justify-content: space-evenly;
    flex-grow: 1;
  `

  const ProductCard = styled(Card)`
    width: 20rem;
    height: 30rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2rem;
  `

  const ProductTitle = styled(Typography)`
    max-height: 2.1em;
    line-height: 1em;
    overflow: hidden;
  `

  return (
    <Grid>
      {products.map((p, i) => (
        <ProductCard key={i}>
            <CardContent>
            <ProductImage src={p.image} alt={`Product image for ${p.title}`} />
            <ProductTitle variant="h4">{p.title}</ProductTitle>
            </CardContent>
            <CardActions>
              <Button variant="outlined" onClick={() => addToCart(p.id)}>Add to cart</Button>
            </CardActions>
        </ProductCard>
      ))}
    </Grid>
  )
}