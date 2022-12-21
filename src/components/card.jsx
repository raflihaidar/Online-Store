import {useEffect, useState} from 'react';
import Cards from '../components/card-items'
import '../style/card.css'

const Products = ({handleClick}) => {
  const url = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);

  
  const getDataProduct = async () => {
    const response = await fetch (url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
  }
  
  useEffect(() => {
    getDataProduct();
  })

  return (
    <div className="product-container">
    {products.map((item) => {
    return(
    <Cards 
    key={item.id}
    title={item.title}
    description={item.description}
    price={item.price}
    category={item.category}
    image={item.image}
    handleClick={handleClick}
    count={item.count}
    />)
    })}
      </div>
  )
}
export default Products;