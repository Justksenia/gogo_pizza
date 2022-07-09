import React from "react";
import PizzaComponent from "./PizzaComponent/PizzaComponent";

import style from "./Pizza.module.scss";
import PizzaPreloader from "./PizzaPreloader/PizzaPreloader";




const Pizzas=({pizzasItems, onClickAddPizza, cartCount, onClickSize})=>{
console.log(cartCount)
  return (
        <>
    <PizzaComponent state={pizzasItems} onClickAddPizza={onClickAddPizza} cartItem={cartCount} onClickSize={onClickSize}/>
    </>
    )
}


export default Pizzas