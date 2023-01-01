import './App.css';
import React from 'react'

import {
  BrowserRouter as Router, Link,
  Routes, Route
} from 'react-router-dom'

import ContactMe from './ContactMe';
import Contacts from './Contacts';
import Blog from './Blog';
import AddCon from './AddCon';
import Home from './Home';
import DisCon from './DisCon';
import AddBlog from './AddBlog';
import DisBlog from './DisBlog';

function App() {
  return (
    <>

      <Router>
        <div className="hero">
          <nav>
            <h2 className="logo">Omar<span>Blogs</span></h2>
            <ul>
              <li><Link to="Contacts">Contacts</Link></li>
              <li><Link to="Blog">Blogs</Link></li>
              <li><Link to="ContactMe">Contact Me</Link></li>
            </ul>
            <Link to="/"><span className="material-symbols-outlined">
              home
            </span></Link>
          </nav>

        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="AddCon" element={<AddCon />} />
          <Route path="DisCon" element={<DisCon />} />
          <Route path="AddBlog" element={<AddBlog />} />
          <Route path="DisBlog" element={<DisBlog />} />



        </Routes>
      </Router>
    </>
  );
}

export default App;
