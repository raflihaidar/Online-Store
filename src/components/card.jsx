import '../style/card.css';
import {useEffect} from 'react';
import Cards from '../components/card-items';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

const Products = (props) => {

  const url = 'https://fakestoreapi.com/products';
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const getDataProduct = async () => {
    const response = await axios
    .get(url)
    .catch((err) => {
      console.log("error", err)
    })
    dispatch(setProducts(response.data));
    console.log(response.data);
  }
  
  useEffect(() => {
    getDataProduct();
  })

  return (
    <div className="product-container">
    {products.map((item) => {
    return(
    <Cards 
    id={item.id}
    title={item.title}
    description={item.description}
    price={item.price}
    category={item.category}
    image={item.image}
    handleClick={props.handleClick}
    count={item.count}
    />)
    })}
      </div> 
  )
}
export default Products;