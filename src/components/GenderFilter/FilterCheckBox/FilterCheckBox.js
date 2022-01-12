import { useState } from "react";

import "./FilterCheckBox.scss";

/*-------Filter Checkbox----------*/
/*props :        */
/*  - name       */
/*  - label      */
/*  - count      */
/*  - onSelect   */
/*  - onUnSelect */

const FilterCheckBox = (props) => {
  const { name, label, count, onSelect, onUnSelect } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;

    setIsChecked(!isChecked);
    if (e.target.checked) {
      onSelect(name);
    } else {
      onUnSelect(name);
    }
  };

  return (
    <div className="checkbox">
      <input
        data-testid={name}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      ></input>
      {label} ({count.toString()})
    </div>
  );
};

export default FilterCheckBox;
