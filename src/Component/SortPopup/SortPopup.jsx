import React from "react"
import { useState, useRef, useEffect } from "react"
import style from "./SortPopup.module.scss"

const SortPopup = ({ items, onClickItem, sortBy })=> {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeLabel = items.find((obj) => obj.type === sortBy).name;

  const togglePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const onSelectItem = (index) => {
    onClickItem(index);
    setVisiblePopup(false);
  };

  const handleClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={sortRef}>
      <b className="mr-10">Сортировка по:</b>
      <span onClick={togglePopup} className="font-bold border-b-1 border-dashed cursor-pointer text-orange">
        {activeLabel}
      </span>
      {visiblePopup && (
        <div className={style.sortPopup}>
          <ul className={style.list}>
            {items.map((item, index) => (
              <li
                key={index}
                className={ sortBy === item.type ? style.active : null}
                onClick={() => onSelectItem(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}


export default SortPopup;
