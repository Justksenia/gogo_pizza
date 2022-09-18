import { configureStore} from "@reduxjs/toolkit";

import filterReducer from "./reducers/filterReducer"
import pizzasReducer from "./reducers/pizzasReducer";
import cartReducer from "./reducers/cartReducer";


const store=configureStore({
  reducer:{filterReducer, pizzasReducer, cartReducer},
  middleware: getDefaultMiddleware=>getDefaultMiddleware(),
  devTools: process.env.NODE_ENV!=="production"
})

export default store