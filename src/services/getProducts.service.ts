export default async function getProducts(limit: number=10) { 
  return await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then(res => res.json())
    .catch(() => [])
}