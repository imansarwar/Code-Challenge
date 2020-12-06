const favouriteItemReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      return updateArray(state, action.id);
    default:
      return state;
  }
};

export default favouriteItemReducer;

const updateArray = (state, id) => {
  console.log("togglingl");
  return state.map((photos) => {
    if (photos.id === id) {
      photos.isFavorite = !photos.isFavorite;
    }
    return photos;
  });
};
