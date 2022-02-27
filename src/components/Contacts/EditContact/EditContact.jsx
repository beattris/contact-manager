import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <Fragment>
    <section className="add-contact p-3">
      <div className="container">
        <div className="row">
          <div className="col ">
            <p className="h3 text-primary fw-bold">Edit Contact</p>
            <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus dolorum facilis, tempore aperiam, iure tempora quos beatae sunt non labore nisi nostrum qui ut quibusdam eius. Fuga, obcaecati! Doloribus?</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4 ">
            <form>
              <div className="mb-2">
                <input type="text" className="form-control " placeholder="Name"/>
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Photo Url"/>
              </div>
              <div className="mb-2">
                <input type="number" className="form-control" placeholder="Mobile"/>
              </div>
              <div className="mb-2">
                <input type="email" className="form-control" placeholder="Email"/>
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Company"/>
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Title"/>
              </div>
              <div className="mb-2">
                <select className="form-control">
                  <option value="">Select a Group</option>
                </select>
              </div>
              <div className="mb-2">
                <input type="submit" className="btn btn-primary mt-1 bump" value="Update"/>
                <Link to={'/contacts/list'} className="btn btn-dark ms-2 mt-1 bump">Cancel</Link>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png" alt="profile icon" className="contact-img"/>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
  );
};

export default EditContact;
