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
    fetch(`/pizzas?${category!==null?`category=${category}`:
    ""}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(resp=>resp.json()).then(json=>dispatch(setPizzas((json))))
}