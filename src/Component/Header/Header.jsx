import style from "./Header.module.css"
import img from "../../common/img/cart.svg"
import logo from "../../common/img/image 1.svg"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as selector from "../../redux/selectors/selectors"

const Header=()=>{
    const {totalCount, totalPrice}=useSelector(selector.cartSelector)
       return (
        <header>
            <div className={style.logoHeader}>
                <img src={logo} alt="logo-pizza"/>
                <Link to="/">
                <div className={style.textHeader}>
                    <h1>GOGO PIZZA</h1>
                    <p>Сеть пиццерий №0 в России</p>
                </div>
                </Link>
            </div>
            <div className={style.cart}>
                <Link to="/cart">
                    <button className="button__header">
                    <span>{totalPrice} R</span>
                    <img src={img} alt="trash"/>
                    <span>{totalCount}</span>
                    </button>
                </Link>
            </div>
        </header>
    )
}


export default Header