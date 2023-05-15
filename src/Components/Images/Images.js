import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from "reactstrap";
import  school1 from './school1.jpg'
import school2 from './school2.jpg'
import school3 from './school3.jpg'

const Images = () => {

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
      };
    return <div >
       
<Slider {...settings}>
<div>
<img src={school3} alt="" className="school" />
</div>
<div>
<img src={school1} alt="" className="school" />
</div>
<div>
<img src={school2} alt="" className="school" />
</div>

  </Slider>

    </div>;
}


export default Images;