import { useDispatch} from 'react-redux';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';

import Home from './page/Home';
import ShoppingCart from './page/ShoppingCart';



function App () {
  const dispatch=useDispatch();

  // window.text=()=>{
  //   fetch("http://localhost:3000/db.json").then(resp=>resp.json()).then(json=>dispatch(setPizzas((json.pizzas))))
  // }
 

  return (
    
    <div className="container">
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
        </Routes>
      
     </div>
    
  );
}
 
 
  
 
  

    


  

// const mapStateToProps=(state)=>{
//   // console.log(state)
//   return {
//       items:state.pizzasReducer.pizzasItems
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     pizzasDispatch:(items)=>dispatch(setPizzas(items))
//   }
// }
// const mapDispatchToProps={
//  setPizzas
// }
export default App;
