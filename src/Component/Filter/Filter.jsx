import style from "./Filter.module.scss";

const Filter=({items, onClickItem, category})=>{
    return (
        <div>
        <nav>
           
            <ul className={style.navList}>
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
        </div>
    )
}
export default Filter