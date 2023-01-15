const categoriesReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      state.data = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default categoriesReducer;
