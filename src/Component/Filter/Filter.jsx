import style from "./Filter.module.scss";
import { useSelector } from "react-redux";



const Filter=({items, onClickItem, category})=>{

 
    return (
        <nav>
            <ul className={style.nav__list}>
                <li className={category===null?style.active:null} 
                onClick={()=>onClickItem(null)}>Все</li>
                {items.map((item,index)=>{
                    return (<li className={category===index?style.active:null} 
                    key={`${index}_${item}`}
                    onClick={()=>onClickItem(index)}
                    >{item}</li>)
                })}
            </ul>
           
        </nav>
    )
}
export default Filter