import Stars from "react-stars-display";

import "./Vote.scss";

/*-------Generic component - vote----------*/
/*props :    */
/*  - header */
/*  - note   */
/*  - color  */

const Vote = (props) => {
  const { header, note, color } = props;
  return (
    <>
      {header && <div className="vote-label">{header}</div>}
      <Stars
        stars={note}
        size={20} //optional
        spacing={2} //optional
        fill={color}
      />
    </>
  );
};

export default Vote;
