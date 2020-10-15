import React from "react";
import "./circledate.scss";
export default function CircleDate(props){
    return (
        <div>
            <circle style={{
                background : props.background
            }}>
                    <span className="circle" >
                        <p style={{
                            fontWeight : "lighter",
                            marginTop : "16px"
                        }}>{props.day}</p>
                        <p style={{
                            fontWeight : "bold",
                            marginTop : "-20px"
                        }}>{props.date}</p>
                    </span>
            </circle>
        </div>
    )
}