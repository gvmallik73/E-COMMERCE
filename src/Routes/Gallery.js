import React from 'react'

export default function Gallery({productItems, handleAddToCart}) {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={{ height: "400px" }}
                            src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img class="d-block w-100" style={{ height: "400px" }}
                            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{ height: "400px" }}
                            src="https://images.pexels.com/photos/16052344/pexels-photo-16052344/free-photo-of-photo-of-a-hand-holding-a-phone-with-a-delivery-app-on-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className='container row' style={{ margin: "auto" }}>
                {productItems.map((product) => (
                    <div className='card col-5' style={{ margin: "25px" }}>
                        <img className='card-img-top' style={{ height: "255px" }} src={product.pic} />
                        <div className='card-body'>
                            <h5 className='card-title'>{product.name}</h5>
                            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            </p>
                            <button className='btn btn-primary' onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
