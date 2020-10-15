import React from "react";
import {Carousel, Gap, Navbar} from "../../components";

export default function MainApp(){
    return (
        <div>
            <Navbar/>
            <Gap height={5}/>
            <Carousel/>
        </div>
    )
}