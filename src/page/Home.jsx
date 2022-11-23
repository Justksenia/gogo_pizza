import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filter";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import * as select from "../redux/selectors/selectors";

import Filter from "../Component/Filter/Filter";
import PizzaComponent from "../Component/PizzaSection/PizzaComponent/PizzaComponent";
import SortPopup from "../Component/SortPopup/SortPopup";
import PizzaPreloader from "../Component/PizzaSection/PizzaPreloader/PizzaPreloader";

const pizzasCategory = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закуски",
];
const pizzasSort = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "asc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(select.filterSelector);
  const { pizzasItems, isLoading } = useSelector(select.pizzasSelector);
  const cartItems = useSelector(select.cartSelector);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };
  const onSelectSort = (type) => {
    dispatch(setSortBy(type));
  };
  const onClickAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <>
      <nav>
        <div className="flex justify-between items-center">
          <Filter
            items={pizzasCategory}
            onClickItem={onSelectCategory}
            category={category}
          />
          <SortPopup
            items={pizzasSort}
            onClickItem={onSelectSort}
            sortBy={sortBy.type}
          />
        </div>
      </nav>
      <main>
        <div className="flex flex-wrap">
          {isLoading
            ? pizzasItems.map((obj) => (
                <PizzaComponent
                  onClickAddPizza={onClickAddPizza}
                  pizzasItems={obj}
                  key={obj.id}
                  cartCount={
                    cartItems.items[obj.id] &&
                    cartItems.items[obj.id].items.length
                  }
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <PizzaPreloader key={index} />)}
        </div>
      </main>
    </>
  );
};

export default Home;
