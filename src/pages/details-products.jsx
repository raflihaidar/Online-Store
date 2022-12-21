import Navbar from "../components/navbar";

const DetailProducts = (props) => {
    return(
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="detail-container">
                <section className="detail-image">
                    <img src={props.image} alt="detail-images" />
                </section>
                <section className="description">
                    <div className="detail-title"></div>
                    <div className="detail-price"></div>
                    <div className="action"></div>
                </section>
            </div>
        </>
    )
}

export default DetailProducts;