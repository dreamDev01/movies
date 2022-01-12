/*Functions to help for filter data*/

/*Filter movies by date : return list of movies sort by date ascending or descending*/
export const filterByOrder = (list, sort) => {
  if (!sort) return list;

  if (sort === "asc") {
    return list.slice().sort((a, b) => a.date - b.date);
  } else {
    return list.slice().sort((a, b) => b.date - a.date);
  }
};

/*Filter movies by gender : return list of movies sort by gender*/
export const filterByGender = (list, gender) => {
  if (!gender) return list;

  return list.filter((movie) => gender.includes(movie.gender));
};

/*Pagination : return list of movies for the current page*/
export const pagination = (state, args) => {
  if (!args || !args.perPage || !args.currentPage) {
    return state;
  }
  const pos = args.perPage * (args.currentPage - 1) || 0;

  return state.slice(pos, pos + args.perPage);
};
