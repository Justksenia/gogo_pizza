const initialState={
    pizzasItems:[],
    isLoading:false
}
const pizzasReducer=(state=initialState, action)=> {
    switch (action.type) {
        case "SET_PIZZAS":
            return {
                ...state,
                pizzasItems:action.payload,
                isLoading:true,
            }
        
        case "SET_LOADING": 
            return {
                ...state,
                isLoading:action.payload
            }
        
    default:
        return state
}
}

export default pizzasReducer