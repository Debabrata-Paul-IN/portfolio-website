import React, { useEffect, useState } from "react";
import './skills.css'

export default function SkillChild(props) {
    const [style, setStyle] = useState()
    useEffect(()=>{
        setTimeout(()=>{
            const newStyle = {
                width: props.percentage
            }
            //console.log(newStyle);
            setStyle(newStyle)
        },900)
    },[props.percentage])
   

    return (
        <div className="skill-container">
            <div className="skill-bar">
                <div className="left">
                    <span>{props.icon}</span>
                </div>
                <div className="right">
                    <h5>{props.skill}</h5>
                    <div className="bar">
                        <div className="progress" style={style}>
                            <span>{props.percentage}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
