import './App.css';
import React from 'react'
import { useState } from "react";


function AddCon() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  function handlechangename(e) {

    setname(e.target.value, name);


  }

  function handlechangeemail(e) {

    setemail(e.target.value, email);


  }


  function handlechangephone(e) {

    setphone(e.target.value, phone);


  }


  var objcon = {
    name: name,
    phone: phone,
    email: email
  }

  function add(e) {
    

    var item = 'name';
    var item_id = localStorage.length + 1;

    localStorage[item + item_id] = objcon.name;

    var item2 = 'email';
    var item_id2 = localStorage.length;
    localStorage[item2 + item_id2] = objcon.email;

    var item3 = 'phone';
    var item_id3 = localStorage.length - 1;
    localStorage[item3 + item_id3] = objcon.phone;



  }



  return (

    <div className="content">

      <div className="container">
        <div className="form-container">


          <div className="left-container">
            <div className="left-inner-container">
              <h2 >Let's Add</h2>
              <br />
              <p>You want to Add a new contact
                Fill out this form please</p>
            </div>
          </div>


          <div className="right-container">
            <div className="right-inner-container">
              <form onSubmit={add}>
                <h2 className="lg-view">Add Contact</h2>
                <br />
                <p>* Required</p>

                <input type="text" placeholder="Name *" onChange={handlechangename} required />
                <input type="email" placeholder="Email *" onChange={handlechangeemail} required />
                <input type="text" placeholder="Phone *" onChange={handlechangephone} required />


                <button className="button-add2">Add Contact</button>
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
}

export default AddCon;