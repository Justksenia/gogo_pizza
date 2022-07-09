
export const cartSelector = state => state.cartReducer
export const filterSelector = state => state.filterReducer
export const pizzasSelector = state => state.pizzasReducer

//потом где надо сделать
//export * as selector from "../redux/selectors/selectors"
//короче читай статью про мемоизацию юзселектор