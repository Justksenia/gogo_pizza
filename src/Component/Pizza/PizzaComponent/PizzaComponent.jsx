

import classNames from "classnames";
import { useState } from "react"
import style from "./PizzaComponent.module.scss"


const PizzaComponent=({state, onClickAddPizza, cartItem})=>{

    const {id, types, imageUrl,name,price,sizes }=state
    const availableTypes=["тонкое", "традиционное"];
    const availableSize=[25,30,35]

    const [activeTypes,setActiveTypes]=useState(types[0]);
    const [activeSize, setActiveSize]=useState(0);
    const onAddPizza=()=>{
      const object={
        id,
        name,
        type:availableTypes[activeTypes],
        size:availableSize[activeSize],
        imageUrl,
        price,
      }
      onClickAddPizza(object)
    }

    const onSelectItems=(index,set)=>{
        set(index)
   }

    return (
        <article>
          <div className={style.img__block}>
            <img src={imageUrl} alt="pizza"/>
          </div>
            <h4>{name}</h4>
            <div className={style.filterWrapper}>
                <ul className={style.filterType}>
                  {availableTypes.map((item,index)=>(
                  <li onClick={()=>onSelectItems(index,setActiveTypes)} key={index}
                  className={classNames({
                    active:activeTypes===index,
                    disabled:!types.includes(index)
                  })}>{item}</li>
                    ))}
                </ul>
                <ul className={style.diametrPizza}>
                {availableSize.map((item,index)=>(
                  <li onClick={()=>onSelectItems(index,setActiveSize)} key={index}
                  className={classNames({
                    active:activeSize===index,
                    disabled:!sizes.includes(item)
                  })}>{item} см.</li>
                    ))}
                </ul>
            </div>
            <div className={style.price}>
                <span >{price} &#8381;</span>
                <button onClick={onAddPizza}>+ Добавить {cartItem}</button>
            </div>
        </article>
    )
}


export default PizzaComponent