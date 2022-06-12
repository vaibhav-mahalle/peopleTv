const FilterByCategory = (state, data) => {
    return state.category === "ALL"
      ? data
      : data.filter((v) => v.category === state.category);
  };
  const Compose =
    (state, ...functions) =>
    (data) => {
      return functions.reduce((acc, curr) => {
        return curr(state, acc);
      }, data);
    };
  
  export { FilterByCategory, Compose };