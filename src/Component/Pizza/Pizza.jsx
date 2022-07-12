import React from "react";
import PizzaComponent from "./PizzaComponent/PizzaComponent";

const Pizzas = ({ pizzasItems, onClickAddPizza, cartCount, onClickSize }) => {
  return (
    <>
      <PizzaComponent
        state={pizzasItems}
        onClickAddPizza={onClickAddPizza}
        cartItem={cartCount}
        onClickSize={onClickSize}
      />
    </>
  );
};

export default Pizzas;
