
import style from "./CartItem.module.css";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";

const CartItem=({id,name,price, type, size, image, count, onRemoveItem, onPlusItem, onMinusItem})=>{
   

    return (
        <div>
        <div className={style.trash__component}>
                <img src={image} alt={name}/>
                <div>
                    <p>{name}</p>
                    <p>{type} тесто, {size} см </p>
                </div>
                <div className={style.button__count}>
                    <button className={style.button__section} onClick={()=>onMinusItem(id)}><FaMinus/></button>
                    <span>{count}</span>
                    <button className={style.button__section} onClick={()=>onPlusItem(id)}><FaPlus/></button>
                </div>
                <div className={style.price}>{price}p</div>
                <div className={style.button__count}>
                    <button className={style.button__clear} onClick={()=>onRemoveItem(id)}><FaTimes/></button>
                </div>
            </div>
              

         
            </div>
    )
}
export default CartItem