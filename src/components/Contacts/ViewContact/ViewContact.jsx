import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

const ViewContact = () => {
  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {},
    errormessage: "",
  });

  const viewContactsHandler = useCallback(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getContact(contactId);
      setState({
        ...state,
        loading: false,
        contact: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  }, []);

  useEffect(() => {
    viewContactsHandler();
  }, [viewContactsHandler]);

  let { loading, contact, errormessage } = state;

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

      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {Object.keys(contact).length > 0 && (
            <section className="view-contact mt-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      src={contact.photo}
                      alt="profile icon"
                      className="contact-img"
                    />
                  </div>
                  <div className="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-active ">
                        Name : <span className="fw-bold">{contact.name}</span>
                      </li>
                      <li className="list-group-item list-group-item-active">
                        Mobile : <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-active">
                        Email :{" "}
                        <span className="fw-bold">{contact.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-active">
                        Company :{" "}
                        <span className="fw-bold">{contact.company}</span>
                      </li>
                      <li className="list-group-item list-group-item-active">
                        Title :{" "}
                        <span className="fw-bold">{contact.title}</span>
                      </li>
                      <li className="list-group-item list-group-item-active">
                        Group :{" "}
                        <span className="fw-bold">{contact.groupId}</span>
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
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ViewContact;
