import './App.css';
import React, { useState } from "react";




function AddBlog() {
  const [subject, setsubject] = useState("");
  const [date, setdate] = useState("");
  const [Description, setdesc] = useState("");

  function handlechangesubject(e) {

    setsubject(e.target.value, subject);


  }

  function handlechangedate(e) {

    setdate(e.target.value, date);


  }


  function handlechangedesc(e) {

    setdesc(e.target.value, Description);


  }


  var objcon = {
    subject: subject,
    date: date,
    Description: Description
  }

  function add(e) {

    var item = 'subject';
    var item_id = sessionStorage.length + 1;

    sessionStorage[item + item_id] = objcon.subject;

    var item2 = 'date';
    var item_id2 = sessionStorage.length;
    sessionStorage[item2 + item_id2] = objcon.date;

    var item3 = 'Description';
    var item_id3 = sessionStorage.length - 1;
    sessionStorage[item3 + item_id3] = objcon.Description;



  }



  return (


    <div className="content">

      <div className="container">
        <div className="form-container">


          <div className="left-container">
            <div className="left-inner-container">
              <h2 >Let's Add</h2>
              <br />
              <p>You want to Add a new blog
                Fill out this form please</p>
            </div>
          </div>


          <div className="right-container">
            <div className="right-inner-container">
              <form onSubmit={add} >
                <h2 className="lg-view">Add Blog</h2>
                <br />
                <p>* Required</p>
                <input type="text" placeholder="Subject *" onChange={handlechangesubject} required/>
                <input type="date" placeholder="Email *" onChange={handlechangedate}  required/>
                <textarea rows="100" placeholder="Description *" onChange={handlechangedesc} required ></textarea>

                <button className="button-add3" >Add Blog</button>
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
}

export default AddBlog

