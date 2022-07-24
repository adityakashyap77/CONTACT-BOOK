import React from "react";
import "./styles/App.css";
import Navbar from "./components/elements/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContact from "./components/contacts/Addcontact";
import EditContact from "./components/contacts/EditContact";
import { Contacts } from "./components/contacts/Contacts";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route path="/" component={<Contacts/>} />
                <Route path="/contacts/add" component={<AddContact/>} />
                <Route path="/contacts/edit/:id"component={<EditContact/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;