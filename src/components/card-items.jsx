const Cards = (item) =>  {
  const {image, title, price, handleClick, setShow} = item;
    return (
      <div className="card-container">
          <div className="card-body">
            <div className="card-image">
              <img src={image} alt='gambar produk'/>
            </div>
            <div className="card-text">
              <p>{title}</p>
              <p>${price}</p>
            </div>
          </div>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
          <button onClick={() => setShow(false)}>Show Details</button>
      </div>
    );
  }

export default Cards; 