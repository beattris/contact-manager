import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar-dark bg-dark navbar-expand-sm p-3">
        <div className="container">
          {/* Link is used in place of html <a> tag, it is specific to react-router-dom*/}
          <Link to={'/'} className="navbar-brand">
           <i className="fa fa-mobile text-warning" /> Contact <span className="text-warning">Manager</span></Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
