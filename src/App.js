import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContactList from './components/Contacts/ContactList/ContactList';
import ViewContact from './components/Contacts/ViewContact/ViewContact';
import EditContact from './components/Contacts/EditContact/EditContact';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<ContactList />} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact />} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
