import {Link} from 'react-router-dom';

const Cards = (props) =>  {
  const {image, title, price, handleClick, id} = props;
    return (
      <div className="card-container" id={id}>
        <Link to={`/product/${id}`} className="Link">
          <div className="card-body">
            <div className="card-image">
              <img src={image} alt='gambar produk' className='image-product'/>
            </div>
            <div className="card-text">
              <p>{title}</p>
              <p>${price}</p>
            </div>
          </div>
          </Link>
          <button onClick={() => handleClick(props)}>Add to Cart</button>
      </div>
    );
  }

export default Cards; 