const customizerReducer = (state, action) => {
    switch (action.type) {
        case "GET":
            state.customizer = action.payload
            return { ...state };
            break;

        default:
            return state
            break;
    }
}

export default customizerReducer;