import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="*" element={<NoPage/>}/>
              </Routes>
          </Layout>
      </div>
  );
}

export default App;
