import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";



function App() {
  return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/" element={<Main/>}/>
              </Routes>
          </Layout>
      </div>
  );
}

export default App;
