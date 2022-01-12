import { useState } from "react";
import { connect } from "react-redux";
import { byAsc, byDesc, BY_ASC, BY_DESC } from "../../redux/actions";

import FilterRadio from "./FilterRadio/FilterRadio";

/*-------Sort by date filter: ascending / descnding----------*/

const SortByDateFilter = (props) => {
  const { dispatch } = props;

  const [ascChecked, setASCChecked] = useState(false);
  const [descChecked, setDESCChecked] = useState(false);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (value === BY_ASC) {
      setASCChecked(isChecked);
      setDESCChecked(!isChecked);
      dispatch(byAsc());
    } else {
      setASCChecked(!isChecked);
      setDESCChecked(isChecked);
      dispatch(byDesc());
    }
  };
  return (
    <div className="filterPanel">
      <p className="title">Date</p>
      <FilterRadio
        checked={ascChecked}
        label="Ascendant"
        value={BY_ASC}
        handleChange={handleRadioChange}
      />
      <FilterRadio
        checked={descChecked}
        label="Descendant"
        value={BY_DESC}
        handleChange={handleRadioChange}
      />
    </div>
  );
};

export default connect()(SortByDateFilter);
