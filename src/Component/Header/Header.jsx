import style from "./Header.module.scss"
import img from "../../common/img/cart.svg"
import logo from "../../common/img/image 1.svg"
import { useSelector } from "react-redux"
import store from "../../redux/store"
import { Link } from "react-router-dom"

const Header=()=>{
    const {totalCount, totalPrice}=useSelector(({cartReducer})=>cartReducer)
   
    
    return (
        <header>
            <div className={style.logoHeader}>
                <img src={logo} alt="logo-pizza"/>
                <Link to="/">
                <div className={style.text__header}>
                    <h1>GOGO PIZZA</h1>
                    <h2>Сеть пиццерий №0 в России</h2>
                </div>
                </Link>
            </div>
            <div className={style.cart}>
                <Link to="/cart">
                    <button>
                    <span>{totalPrice} R</span>
                    <span>|</span>
                    <img src={img} alt="trash"/>
                    <span>{totalCount}</span>
                    </button>
                </Link>
            </div>
        </header>
    )
}


export default Header