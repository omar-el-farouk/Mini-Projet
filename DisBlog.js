import './App.css';
import React from 'react'

import tab1 from './SessionStorage';
import posts from './myposts'





function DisBlog() {





  return (

    <div className="content">

      <div className="title">
        <h2>All Blogs</h2>
      </div>
      <div className="all_con">

        <ul>
          {
            posts.map((v) => {

              return (
                <>
                  <li  >
                    <span className="material-symbols-rounded ">
                      edit
                    </span>
                    <span>   </span>
                    {v.subject}
                  </li>

                  <li  >
                    <span class="material-symbols-rounded">
                      calendar_month
                    </span>
                    <span>   </span>
                    {v.date}
                  </li>



                  <li  >
                    <span className="material-symbols-rounded ">
                      comment
                    </span>
                    <span>   </span>
                    {v.desc}
                  </li>

                  <br />

                </>

              )
            })

          }

          {
            tab1.map((v) => {

              return (
                <>
                  <li  >
                    <span className="material-symbols-rounded ">
                      edit
                    </span>
                    <span>   </span>
                    {v.subject}
                  </li>

                  <li  >
                    <span class="material-symbols-rounded">
                      calendar_month
                    </span>
                    <span>   </span>
                    {v.date}
                  </li>



                  <li  >
                    <span className="material-symbols-rounded ">
                      comment
                    </span>
                    <span>   </span>
                    {v.Description}
                  </li>

                  <br />

                </>

              )
            })

          }







        </ul>

        {/* localStorage.getItem('item') */}

      </div>





    </div>

  );
}

export default DisBlog;