const filterReducer = (state, action) => {
    switch (action.type) {
        case "CTG":
            state.filteredCtgs = action.payload
            return { ...state }
            break;
        case "TEXT":
            state.searchText = action.payload
            return { ...state }
            break;
        case "LOC":
            state.searchLoc = action.payload
            return { ...state }
            break;
        case "PRICE":
            state.priceRange = action.payload
            return { ...state }
            break;
        case "WARRANTY":
            state.warranty = action.payload
            return { ...state }
            break;
        case "CONDITION":
            state.condition = action.payload
            return { ...state }
            break;

        default:
            return state
            break;
    }

    return {}
}

export default filterReducer