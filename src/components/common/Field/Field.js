import classnames from "classnames";

import "./Field.scss";

/*-------Genric component : Field----------*/
/*props :    */
/*  - value  */
/*  - header */

const Field = (props) => {
  const { value, header } = props;

  if (!value) {
    return <></>;
  }

  return (
    <>
      {header && <div className="field-label">{header}</div>}
      <div
        data-testid={header}
        title={value}
        className={classnames("field-value", { alone: header === undefined })}
      >
        {value}
      </div>
    </>
  );
};

export default Field;
