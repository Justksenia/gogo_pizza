import { useDispatch, useSelector } from "react-redux";
import {
  minusCartItem,
  plusCartItem,
  removeCartItem,
} from "../redux/actions/cart";
import * as select from "../redux/selectors/selectors";

import CartItem from "../Component/CartItem/CartItem";
import CartEmpty from "../Component/CartItem/CartEmpty";

// import style from "./Cart.module.scss";


const Cart = () => {
  const dispatch = useDispatch();

  const onClearCart = () => {
    dispatch("CLEAR_CART");
  };
  const onRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };
  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };
  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const { items, totalPrice, totalCount } = useSelector(select.cartSelector);
  const pizzasCart = Object.keys(items).map((key) => items[key].items[0]);

  return (
    <div className="max-w-screen-md m-auto">
      {totalCount ? (
        <>
          <div className="flex items-center justify-between">
            <div className="trash">
              <i>
                <img src="img/cart1.svg" alt="cart_logo" />
              </i>
              <h4>Корзина</h4>
            </div>

            <div className="clearCart" onClick={onClearCart}>
              <img src="img/trash.svg" alt="cart_trash" />
            </div>
          </div>
          <section>
            {pizzasCart.map((item) => (
              <CartItem
                name={item.name}
                key={item.id}
                id={item.id}
                price={items[item.id].totalPrice}
                type={item.type}
                size={item.size}
                image={item.imageUrl}
                count={items[item.id].items.length}
                onRemoveItem={onRemoveItem}
                onPlusItem={onPlusItem}
                onMinusItem={onMinusItem}
              />
            ))}
          </section>
          <div className="totalOrders">
            <p>
              Всего пицц: <span>{totalCount} шт</span>
            </p>
            
            <p>
              Сумма заказа: <span className="orange">{totalPrice} &#8381;</span>
            </p>
            
          </div>
          <div className="buttonSection">
              <button className="blackButton">Вернуться назад</button>
              <button>Оплатить заказ</button>
            </div>
        </>
      ) : (
        <CartEmpty/>
      )}
    </div>
  );
};

export default Cart;
