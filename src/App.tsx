import { useEffect, useState } from 'react';
import './App.css';
import getProducts from './services/getProducts.service';
import { CartProduct, Product } from './types/product';
import styled from '@emotion/styled';
import { Cart } from './widgets/Cart';
import { ProductList } from './widgets/ProductList';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])

  const incrementProductInCart = (pid: Product['id']) => {
    const productIndex = cartProducts.findIndex(cp => cp.id === pid)
    const product = products.find(p => p.id === pid)
    if (!product) return
    let newProducts = [...cartProducts]

    if (productIndex === -1) {
      newProducts.push({
        id: product.id,
        title: product.title,
        price: product.price,
        count: 1
      })
    }
    else {
      newProducts[productIndex].count++
    }
    
    setCartProducts(newProducts)
  }

  const decrementProductInCart = (pid: Product['id']) => {
    const productIndex = cartProducts.findIndex(cp => cp.id === pid)
    if (productIndex === -1) return
    let newProducts = [...cartProducts]
    
    if (newProducts[productIndex].count === 1) {
      newProducts.splice(productIndex)
    }
    else {
      newProducts[productIndex].count--
    }
    
    setCartProducts(newProducts)
  }

  const Main = styled.main`
    display: flex;
    justify-content: space-between;
  `

  return (
    <div className="App">
      <header className="AppHeader">
        <h2>Fake store</h2>
      </header>
      <Main>
        <ProductList
          products={products}
          addToCart={incrementProductInCart}
        />
        <Cart
          products={cartProducts}
          incrementProductCount={incrementProductInCart}
          decrementProductCount={decrementProductInCart}
        />
      </Main>
    </div>
  );
}

export default App;
