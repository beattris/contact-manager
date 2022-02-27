import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col offset-md-2">
              <p className="h3 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus dolorum facilis, tempore aperiam, iure tempora quos beatae sunt non labore nisi nostrum qui ut quibusdam eius. Fuga, obcaecati! Doloribus?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-2">
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
                  <input type="submit" className="btn btn-success" value="Add Contact"/>
                  <Link to={'/contacts/list'} className="btn btn-dark ms-2">Close</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AddContact;
