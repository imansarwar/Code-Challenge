const cartItemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.item.id)]
      };
    case "REMOVE_ALL_ITEM":
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartItemReducer;
