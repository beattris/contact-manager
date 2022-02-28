import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

const AddContact = () => {
  let navigate = useNavigate();
   
  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: "",
    },
    groups: [],
    errorMessage: "",
  });

  let updatedInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  const selectGroupsHandler = useCallback(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        groups: response.data
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
    selectGroupsHandler();
  }, [selectGroupsHandler]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try{
      let response = await ContactService.createContact(state.contact);
      if(response){
        navigate('/contacts/list', { replace: true})
      }
    }
    catch (error){
      setState({...state, errorMessage: error.message});
      navigate('/contacts/add', {replace: false});
    }
  }

  let { loading, contact, groups, errorMessage } = state;

  return (
    <Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col offset-md-2">
              <p className="h3 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ducimus dolorum facilis, tempore aperiam, iure tempora
                quos beatae sunt non labore nisi nostrum qui ut quibusdam eius.
                Fuga, obcaecati! Doloribus?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-2">
              <form onSubmit={formSubmitHandler}>
                <div className="mb-2">
                  <input
                    name="name"
                    required={true}
                    value={contact.name}
                    onChange={updatedInput}
                    type="text"
                    className="form-control "
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="photo"
                    required={true}
                    value={contact.photo}
                    onChange={updatedInput}
                    type="text"
                    className="form-control"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="mobile"
                    required={true}
                    value={contact.mobile}
                    onChange={updatedInput}
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="email"
                    required={true}
                    value={contact.email}
                    onChange={updatedInput}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="company"
                    required={true}
                    value={contact.company}
                    onChange={updatedInput}
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="title"
                    required={true}
                    value={contact.title}
                    onChange={updatedInput}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select 
                    name="groupId"
                    required={true}
                    value={contact.groupId}
                    onChange={updatedInput}
                    className="form-control">
                    <option value="">Select a Group</option>
                    {groups.length > 0 && groups.map(group => {
                      return(
                        <option key={group.id} value={group.id}>{group.name}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success mt-1 bump"
                    value="Add Contact"
                  />
                  <Link
                    to={"/contacts/list"}
                    className="btn btn-dark ms-2 mt-1 bump"
                  >
                    Cancel
                  </Link>
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
