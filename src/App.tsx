import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";

function App() {
  return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/about" element={<Main/>}/>
                  <Route path="/contact" element={<Main/>}/>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
          </Layout>
      </div>
  );
}

export default App;
