
import { useState, useRef, useEffect } from "react"
import {FiTriangle} from "react-icons/fi";
import style from "./SortPopup.module.css"


const SortPopup=({items, onClickItem, sortBy})=>{

    

    const [visiblePopup, setVisiblePopup]=useState(false);
    const sortRef=useRef()
    const activeLabel=items.find(obj=>obj.type===sortBy).name

    const togglePopup=()=>{
        setVisiblePopup(!visiblePopup)
    }
    const onSelectItem=(index)=>{
        onClickItem(index);
        setVisiblePopup(false);
       
    }

    const handleClick=(e)=>{
        if(!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleClick);
      }, []);

    return(
        <div className={style.appFilter} ref={sortRef}>
       
        <span>Сортировка по: </span>
        <span onClick={togglePopup} className="active">{activeLabel}</span>
        {visiblePopup&& 
        <div className={style.sortPopup}>
            <ul>
               {items.map((item,index)=>(
             
                   <li key={index} className={sortBy===item.type?"active":null}
                   onClick={()=>onSelectItem(item)}>{item.name}</li>
               ))}
            </ul>
        </div> }
    </div>

    )
}

export default SortPopup