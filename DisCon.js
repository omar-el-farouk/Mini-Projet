import './App.css';
import React from 'react'
import contacts from './mycontacts';
import tab2 from './LocalStorage';

function DisCon() {

  return (

    <div class="content">

      <div class="title">
        <h2>All Contacts</h2>
      </div>
      <div class="all_con">

        {
          contacts.map((v, i) => {
            return (
              <>
                <ul>
                  <li >
                    <span class="material-symbols-rounded ">
                      person
                    </span>
                    <span>   </span>
                    {v.name}
                  </li>

                  <li >
                    <span class="material-symbols-rounded ">
                      call
                    </span>
                    <span>   </span>
                    {v.phone}
                  </li>


                  <li >
                    <span class="material-symbols-rounded ">
                      mail
                    </span>
                    <span>   </span>
                    {v.email}
                  </li>
                </ul>

                <br />

              </>
            );
          })


        }
        {
          tab2.map((v) => {
            return (
              <>
                <ul>
                  <li >
                    <span class="material-symbols-rounded ">
                      person
                    </span>
                    <span>   </span>
                    {v.name}
                  </li>

                  <li >
                    <span class="material-symbols-rounded ">
                      call
                    </span>
                    <span>   </span>
                    {v.phone}
                  </li>


                  <li >
                    <span class="material-symbols-rounded ">
                      mail
                    </span>
                    <span>   </span>
                    {v.email}
                  </li>

                </ul>

                <br />

              </>

            )

          })

        }








      </div>
    </div>

  );
}

export default DisCon;