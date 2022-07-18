import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import style from "./CartItem.module.scss";

const CartItem = ({
  id,
  name,
  price,
  type,
  size,
  image,
  count,
  onRemoveItem,
  onPlusItem,
  onMinusItem,
}) => {
  return (
       <div className={style.cart__item}>
        <div className={style.description}>
        <img src={image} alt={name} />
        <div>
          <p> <b>{name}</b></p>
          <p>
            {type} тесто, {size} см{" "}
          </p>
        </div>
        </div>
        <div className={style.button__count}>
          <button
            className={style.button__section}
            onClick={() => onMinusItem(id)}
          >
            <FaMinus />
          </button>
          <span>{count}</span>
          <button
            className={style.button__section}
            onClick={() => onPlusItem(id)}
          >
            <FaPlus />
          </button>
        </div>
        <div className={style.price}><b>{price} &#8381;</b></div>
        <div className={style.button__count}>
          <button
            className={style.button__clear}
            onClick={() => onRemoveItem(id)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    
  );
};
export default CartItem;
