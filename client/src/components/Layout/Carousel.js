import React from "react";
import Slider from "react-slick";
import Carousel1 from "../../images/Food1.png";
import Carousel2 from "../../images/Food2.png";
import Carousel3 from "../../images/Food3.png";


function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        autoplay: true
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src={Carousel1} alt="Food" style={{marginRight: 'auto', width: '50%', marginLeft: 'auto', borderRadius: '25px', border: '3px solid rgba(1, 173, 198, 1)'}}></img>
                </div>
                <div>
                    <img src={Carousel2} alt="Food" style={{marginRight: 'auto', width: '50%', marginLeft: 'auto', borderRadius: '25px', border: '3px solid rgba(1, 173, 198, 1)'}}></img>
                </div>
                <div>
                    <img src={Carousel3} alt="Food" style={{marginRight: 'auto', width: '50%', marginLeft: 'auto', borderRadius: '25px', border: '3px solid rgba(1, 173, 198, 1)'}}></img>
                </div>
            </Slider>
        </>
    );
}
export default Carousel;