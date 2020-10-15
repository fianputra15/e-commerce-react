import React, {useEffect, useState} from "react";
import "./circledate.scss";
export default function CircleDate(props){
    let circle = <circle style={{
                    background : (props.val === props.date) ? "#424749" : "none"
                    }} onClick={props.onClick}>
                    <span className="circle" >
                        <p style={{
                            fontWeight : "lighter",
                            color : (props.day === "Sun" || props.day === "Sat") ? "#e2e4e4" : (props.val === props.date) ? "white" : "black",
                            marginTop : "16px"
                        }}>{props.day}</p>
                        <p style={{
                            fontWeight : "bold",
                            color : (props.day === "Sun" || props.day === "Sat") ? "#e2e4e4" : (props.val === props.date) ? "white" : "black",
                            marginTop : "-20px"
                        }}>{props.date}</p>
                    </span>
                </circle>
    return (
        <div>
            {circle}
        </div>
    )
}