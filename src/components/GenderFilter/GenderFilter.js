import { connect } from "react-redux";
import { addGenderToFilter, removeGenderToFilter } from "../../redux/actions";

import { Gender } from "../../data/genders";
import FilterCheckBox from "./FilterCheckBox/FilterCheckBox";

import "./GenderFilter.scss";

/*-------Gender Filter----------*/
/*props :         */
/*  - genderCount */

const GenderFilter = (props) => {
  const { dispatch, genderCount } = props;

  const handleSelectBox = (name) => {
    dispatch(addGenderToFilter(name));
  };

  const handleUnSelectBox = (name) => {
    dispatch(removeGenderToFilter(name));
  };

  return (
    <div className="filterPanel">
      <p className="title">Genres</p>
      {Object.keys(Gender)
        .sort()
        .map((gender, index) => {
          return (
            <div key={index}>
              <FilterCheckBox
                name={Gender[gender].name}
                label={Gender[gender].name}
                count={genderCount[Gender[gender].name] || 0}
                onSelect={handleSelectBox}
                onUnSelect={handleUnSelectBox}
              />
            </div>
          );
        })}
    </div>
  );
};

/*Map filter state to props: filter movies count for selected genders*/
const filterToProps = (state) => {
  const genderCount = {};

  state.movieStore.movies.forEach((m) => {
    genderCount[m.gender] = genderCount[m.gender] + 1 || 1;
  });

  return {
    genderCount,
  };
};

export default connect(filterToProps)(GenderFilter);
