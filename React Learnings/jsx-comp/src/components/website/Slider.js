import React from 'react';
function Slider() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg"
                     className="d-block w-100" height="300" alt="banner1" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg"
                     className="d-block w-100" alt="banner2" height="300" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg"
                     className="d-block w-100" alt="banner3" height="300"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;