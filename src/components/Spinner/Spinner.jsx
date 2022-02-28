import React, { Fragment } from "react";
import SpinnerImg from "../../assets/img/loading.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={SpinnerImg} alt="spinner gif" className="d-block m-auto" style={{width: '150px'}}/>
    </Fragment>
  );
};

export default Spinner;
