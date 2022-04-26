import React from "react";
import '../../index.css';
import image1 from './slide1.jpg';
import image2 from './slide2.png';
import image3 from './slide3.png';
import image4 from './slide4.jpg';

const Carousel = () => {
    return(
        <div>
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="image1"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="image2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="image3"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block w-100" alt="image3"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;