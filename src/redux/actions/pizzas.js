export const setPizzas=(items)=>({
    type:"SET_PIZZAS",
    payload:items
})
export const setLoading=(value)=>({
    type:"SET_LOADING",
    payload:value
})

export const fetchPizzas=(sortBy, category)=>(dispatch)=>{
    dispatch(setLoading(false));
    fetch(`https://6318c47f6b4c78d91b2e8e5f.mockapi.io/pizzas${category!==null?`?category=${category}`:
    ""}?sortBy=${sortBy.type}&order=${sortBy.order}`)
    .then(resp=>resp.json()).then(json=>dispatch(setPizzas((json))))
}
