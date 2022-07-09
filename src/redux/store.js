import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import filterReducer from "./reducers/filterReducer"
import pizzasReducer from "./reducers/pizzasReducer";
import cartReducer from "./reducers/cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer=combineReducers({
  filterReducer,
  pizzasReducer,
  cartReducer,

})


const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export default store