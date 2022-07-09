const initialState={
    items:{},
    totalCount:0,
    totalPrice:0
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer=(state=initialState, action)=>{

    switch(action.type) {
        case 'ADD_PIZZA_CART': 
            const currentPizzaItems = !state.items[action.payload.id]
              ? [action.payload]
              : [...state.items[action.payload.id].items, action.payload];
      
            const newItems = {
              ...state.items,
              [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
              },
            }
            const addPizzas=Object.values(newItems).flat(Infinity);
            return {
                ...state,
                items: newItems,
                totalCount:Object.keys(newItems).reduce((acc,item)=>newItems[item].items.length+acc,0),
                totalPrice:addPizzas.reduce((acc,item)=>acc+=item.totalPrice,0),
              
            }

        case "CLEAR_CART": 
                return {
                    ...state,
                    items:{},
                    totalPrice:0,
                    totalCount:0
                }
            
        case "REMOVE_CART_ITEM": {
            const newItems={...state.items}
            const currentTotalPrice=newItems[action.payload].totalPrice
            const currentTotalCount=newItems[action.payload].items.length
            delete newItems[action.payload]
                return {
                    ...state,
                    items:newItems,
                    totalPrice:state.totalPrice-currentTotalPrice,
                    totalCount:state.totalCount-currentTotalCount
                }
        }
        case "PLUS_CART_ITEM":{

            const newPizzasItems=[...state.items[action.payload].items,
            state.items[action.payload].items[0]]
            
            const newItems={
                ...state.items,
                [action.payload]:{
                    items: newPizzasItems,
                    totalPrice: getTotalPrice(newPizzasItems)
                }
            }
            const totalCount=Object.keys(newItems).reduce((acc,item)=>newItems[item].items.length+acc,0);
            const totalPrice=Object.values(newItems).flat(Infinity).reduce((acc,item)=>acc+=item.totalPrice,0);
            return {
                ...state,
                items:newItems,
                totalCount,
                totalPrice
            }
        }
        case "MINUS_CART_ITEM":{
            const oldItems=state.items[action.payload].items
            const newPizzasItems=oldItems.length>1
            ?state.items[action.payload].items.slice(1)
            :oldItems
            const newItems={
                ...state.items,
                [action.payload]:{
                    items: newPizzasItems,
                    totalPrice: getTotalPrice(newPizzasItems)
                }
            }
            const totalCount=Object.keys(newItems).reduce((acc,item)=>newItems[item].items.length+acc,0);
            const totalPrice=Object.values(newItems).flat(Infinity).reduce((acc,item)=>acc+=item.totalPrice,0);
            return {
                ...state,
                items:newItems,
                totalCount,
                totalPrice
        }
    }


        
        
             
        default: 
            return state
    }
}

export default cartReducer