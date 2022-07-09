import { useDispatch, useSelector } from "react-redux";

import logo from "../../src/common/img/cart1.svg";
import trash from "../../src/common/img/trash.svg";
import CartItem from "../Component/CartItem/CartItem";
import style from "./ShoppingCart.module.scss";
import * as select from "../redux/selectors/selectors";
import { clearCart, minusCartItem, plusCartItem, removeCartItem } from "../redux/actions/cart";

import img from "../../src/common/img/empty_cart.png"

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const onClearCart = () => {
    dispatch(clearCart());
  };
  const onRemoveItem=(id)=>{
    dispatch(removeCartItem(id))
  }
  const onMinusItem=(id)=>{
    dispatch(minusCartItem(id))
  }
  const onPlusItem=(id)=>{
    dispatch(plusCartItem(id))
  }

  const { items, totalPrice, totalCount } = useSelector(select.cartSelector);

  const pizzasCart = Object.keys(items).map((key) => items[key].items[0]);

  return (
    <div className={style.container}>
      {totalCount ? (
        <>
          <div className={style.header}>
            <div className={style.trash}>
              <i>
                <img src={logo} alt="cart_logo" />{" "}
              </i>
              <h4>Корзина</h4>
            </div>

            <div className="cart__clear" onClick={onClearCart}>
              <img src={trash} alt="cart_trash" />
            </div>
          </div>
          <div className={style.line}></div>
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
          <div className={style.totalOrders}>
            <p>
              Всего пицц:<span>{totalCount}</span>
            </p>
            <p>
              Сумма заказа:<span>{totalPrice}</span>
            </p>
          </div>
        </>
      ) : (
        <div className={style.cartEmpty}>
            <h4>Корзина пустая 😕</h4> 
            <p>Вероятней всего, вы не заказывали ещё пиццу. <br/>
            Для того, чтобы заказать пиццу, перейди на главную страницу.</p>

            <div className={style.cartEmpty_image}>
                <img src={img} alt="empty_cart"></img>
            </div>
            <button >Вернутся назад</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
