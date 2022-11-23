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
                <div className="ml-20">
                    <h1>GOGO PIZZA</h1>
                    <p className="text-header-grey">Сеть пиццерий №0 в России</p>
                </div>
                </Link>
            </div>
            <div >
                <Link to="/cart">
                    <button className='btn btn__orange w-150 h-50 flex items-center justify-center'>
                    <span className='text-white m-12' >{totalPrice} &#8381;</span>
                    <img src="/img/cart.svg" alt="trash"/>
                    <span className='text-white m-12' >{totalCount}</span>
                    </button>
                </Link>
            </div>
            </div>
        </header>
    )
}


export default Header