// components/About.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const SubPage = () => {
  return <div>This is a subpage!</div>;
};

const SubPage2 = () => {
    return <div>This is a subpage2!</div>;
  };
  

const About = () => {
    return (
        <div>
          <h2>About Page</h2>
          <Link to="subpage">Go to Subpage</Link>
          <Link to="subpage2">Go to Subpage</Link>
    
          <Routes>
            <Route path="subpage" element={<SubPage />} />
            <Route path="subpage2" element={<SubPage2 />} />
          </Routes>
        </div>
      );
};

export default About;