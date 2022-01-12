import "./FilterRadio.scss";

/*-------FilterRadio----------*/
/*props :          */
/*  - value        */
/*  - label        */
/*  - handleChange */
/*  - checked      */
const FilterRadio = (props) => {
  const { value, label, handleChange, checked } = props;

  return (
    <div className="radio">
      <input
        data-testid={value}
        checked={checked}
        type="radio"
        value={value}
        onChange={handleChange}
      ></input>
      {label}
    </div>
  );
};

export default FilterRadio;
