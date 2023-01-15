const customizerReducer = (state, action) => {
    switch (action.type) {
        case "GET":
            state.customizer = action.payload
            return { ...state };

        default:
            return state
    }
}

export default customizerReducer;