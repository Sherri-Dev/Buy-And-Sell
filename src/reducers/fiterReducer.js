const filterReducer = (state, action) => {
    switch (action.type) {
        case "CTG":
            state.filteredCtgs = action.payload
            return { ...state }
        case "TEXT":
            state.searchText = action.payload
            return { ...state }
        case "LOC":
            state.searchLoc = action.payload
            return { ...state }
        case "PRICE":
            state.priceRange = action.payload
            return { ...state }
        case "WARRANTY":
            state.warranty = action.payload
            return { ...state }
        case "CONDITION":
            state.condition = action.payload
            return { ...state }

        default:
            return state
    }

}

export default filterReducer