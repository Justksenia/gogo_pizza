import { useState, useRef, useEffect } from "react"
import {FiTriangle} from "react-icons/fi";
import { useSelector } from "react-redux";


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

    return(
        <div className="app__filter" ref={sortRef}>
       
        <FiTriangle style={{color:"orange", display:"inline-block", verticalAlign:"text-bottom"}}/>
        <span>Сортировка по: </span>
        <span onClick={togglePopup} className="active">{activeLabel}</span>
        {visiblePopup&& 
        <div className="sort__popup">
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