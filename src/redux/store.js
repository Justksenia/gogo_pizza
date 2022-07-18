import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import filterReducer from "./reducers/filterReducer"
import pizzasReducer from "./reducers/pizzasReducer";
import cartReducer from "./reducers/cartReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const rootReducer=combineReducers({
//   filterReducer,
//   pizzasReducer,
//   cartReducer,

// })


// const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
const stringMiddleware=()=>(next)=>(action)=>{
  if (typeof action==="string") {
    return next ({
      type:action
    })
   
 }
  return next(action)
}

const store=configureStore({
  reducer:{filterReducer, pizzasReducer, cartReducer},
  middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV!=="production"
})

export default store