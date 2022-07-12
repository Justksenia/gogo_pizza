import { useDispatch} from 'react-redux';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import "./scss/app.scss"
import Header from './Component/Header/Header';

import Home from './page/Home';
import ShoppingCart from './page/ShoppingCart';



function App () {
    return (
    
    <div className="wrapper">
      <Header/>
      <div className='content'>
        <Routes>
       
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<ShoppingCart/>} />
         
        </Routes>
        </div>
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
