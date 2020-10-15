import React, {useState} from "react";
import Slider from 'react-slick';
import "../carousel/carousel.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CircleDate, Gap} from "../../../components";
export default function Carousel(){
    const [value,setValue] = useState();
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    function handleClick(val) {
        setValue(val);
    }

    return (
        <Slider {...settings}>
            <CircleDate day="Mon" date="1" background="none" val={value}  onClick={handleClick.bind(this,"1")}/>
            <CircleDate day="Tue" date="2" background="none" val={value}  onClick={handleClick.bind(this,"2")}/>
            <CircleDate day="Wed" date="3" background="none" val={value}  onClick={handleClick.bind(this,"3")}/>
            <CircleDate day="Thu" date="4" background="none" val={value}  onClick={handleClick.bind(this,"4")}/>
            <CircleDate day="Fri" date="5" background="none" val={value}  onClick={handleClick.bind(this,"5")}/>
            <CircleDate day="Sat" date="6" background="none"  />
            <CircleDate day="Sun" date="7" background="none"  />
            <CircleDate day="Mon" date="8" background="none"  onClick={handleClick.bind(this,"8")}/>
            <CircleDate day="Tue" date="9" background="none"  onClick={handleClick.bind(this,"9")}/>
            <CircleDate day="Wed" date="10" background="none"  onClick={handleClick.bind(this,"10")}/>
            <CircleDate day="Thu" date="11" background="none"  onClick={handleClick.bind(this,"11")}/>
            <CircleDate day="Fri" date="12" background="none"  onClick={handleClick.bind(this,"12")}/>
            <CircleDate day="Sat" date="13" background="none"  />
            <CircleDate day="Sun" date="14" background="none"  />
        </Slider>
    )
}