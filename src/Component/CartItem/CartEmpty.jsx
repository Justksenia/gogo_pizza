import {Link} from "react-router-dom";
import style from "./CartItem.module.scss";

const CartEmpty=()=>{

    return (
        <div className={style.cartEmpty}>
          <h4>Корзина пустая 😕</h4>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <div className={style.emptyImage}>
            <img src="img/empty_cart.png" alt="empty_cart"></img>
          </div>
          <Link to="/">
          <button>Вернуться назад</button>
          </Link>
         
        </div>

    )
}

export default CartEmpty