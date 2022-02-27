import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
  return (
    <Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row ">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, placeat sequi? Vel, libero minus voluptates dolor
                minima ex nihil earum odit excepturi dignissimos aliquam
                possimus voluptatem iste magnam accusantium at.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png"
                alt="profile icon"
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-active ">
                  Name : <span className="fw-bold">Trisia</span>
                </li>
                <li className="list-group-item list-group-item-active">
                  Mobile : <span className="fw-bold">88883773832</span>
                </li>
                <li className="list-group-item list-group-item-active">
                  Email : <span className="fw-bold">trisia@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-active">
                  Company : <span className="fw-bold">trisia@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-active">
                  Title : <span className="fw-bold">trisia@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-active">
                  Group : <span className="fw-bold">trisia@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ViewContact;
