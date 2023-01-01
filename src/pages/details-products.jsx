import Navbar from "../components/navbar";
import '../style/product-detail.css';
import {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";


const DetailProducts = () => {
  const {productId} = useParams();
  let product = useSelector((state) => state.singleProduct);
  const {image, title, price, category, description} = product;
  const dispatch = useDispatch();
  
  const getSingleDataProduct = async (id) => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
   if(productId && productId !== "") getSingleDataProduct(productId);
  }, [productId]);

    return(
        <>
            <nav>
                <Navbar />
            </nav>
            {Object.keys(product).length === 0 ? (
              <div>Loading...</div>
            ) :  (
              <div className="detail-container">
                <section className="detail-image">
                  <img src={image} alt={title}/>
                </section>
                <section className="description">
                    <div className="detail-title">
                      <h3>{title}</h3>
                    </div>
                    <div className="detail-price">
                      <h2>${price}</h2>
                    </div>
                    <div className="detail-desc">
                      <p>{description}</p>
                    </div>
                    <div className="action">
                        <button><Link to="/" className="Link">Add to Cart</Link></button>
                        <button><Link to="/" className="Link">Buy Now</Link></button>
                    </div>
                </section>
              </div>
            )}
        </>
    )
}

export default DetailProducts;