import React from "react";
import Slider from 'react-slick';
import "../carousel/carousel.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CircleDate, Gap} from "../../../components";
export default function Carousel(){
    let number;
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <CircleDate day="sat" date="12" background="red"/>
            <CircleDate day="sat" date="12" background="none"/>
            <CircleDate day="sat" date="12" background="none"/>
            <CircleDate day="sat" date="12" background="none"/>
            <CircleDate day="sat" date="12" background="none"/>
            <CircleDate day="sat" date="12" background="none"/>
            <CircleDate day="sat" date="12" background="none"/>
            <CircleDate day="sat" date="12" background="none"/>
        </Slider>
    )
}