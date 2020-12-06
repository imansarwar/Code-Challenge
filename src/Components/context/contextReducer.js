const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isFetching: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isFetching: true,
        data: action.data
      };
    case "FETCH_FAIL":
      return {
        ...state,
        isFetching: true,
        message: "404 Error. Try to reload the page"
      };
    default:
      return state;
  }
};

export default dataReducer;
