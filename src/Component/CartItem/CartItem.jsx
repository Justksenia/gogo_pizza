
import style from "./CartItem.module.css"

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
                    <button className={style.button__section} onClick={()=>onMinusItem(id)}>-</button>
                    <span>{count}</span>
                    <button className={style.button__section} onClick={()=>onPlusItem(id)}>+</button>
                </div>
                <div className={style.price}>{price}p</div>
                <div className={style.button__count}>
                    <button className={style.button__clear} onClick={()=>onRemoveItem(id)}>x</button>
                </div>
            </div>
              

         
            </div>
    )
}
export default CartItem