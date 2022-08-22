import { useSelector } from "react-redux"
import * as selector from "../../redux/selectors/selectors"
import { Link } from "react-router-dom"

import style from "./Header.module.scss"

const Header=()=>{

    const {totalCount, totalPrice}=useSelector(selector.cartSelector)

       return (
        <header>
            <div className={style.wrapper__header}>
            <div className={style.wrapper__logo}>
                <img src="img/pizza_logo.svg" alt="logo-pizza"/>
                <Link to="/">
                <div className={style.textHeader}>
                    <h1>GOGO PIZZA</h1>
                    <p>Сеть пиццерий №0 в России</p>
                </div>
                </Link>
            </div>
            <div className={style.buttonCart}>
                <Link to="/cart">
                    <button>
                    <span>{totalPrice} &#8381;</span>
                    <img src="/img/cart.svg" alt="trash"/>
                    <span>{totalCount}</span>
                    </button>
                </Link>
            </div>
            </div>
        </header>
    )
}


export default Header