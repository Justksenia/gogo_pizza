import React from "react";
import style from "./Filter.module.scss";

const Filter=({items, onClickItem, category})=>{
    return (
        <div>
        <nav className="mr-10 px-20 py-15">
            <ul className="flex content-between cursor-pointer">
                <li className={category===null?"btn btn__black":"btn btn__grey"} 
                onClick={()=>onClickItem(null)}>Все</li>
                {items.map((item,index)=>{
                    return (<li className={` ${category===index?"btn btn__black":'btn btn__grey'}`} 
                    key={`${index}_${item}`}
                    onClick={()=>onClickItem(index)}
                    >{item}</li>)
                })}
            </ul>
            
        </nav>
        </div>
    )
}
export default Filter