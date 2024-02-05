import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import NoPage from "./pages/NoPage/NoPage";
import {useQuery} from "react-query";
import axios from "./axios";
import Post from "./pages/Post/Post";

function App() {
    const navigate = useNavigate();
    const { data: isAuth, refetch } = useQuery({
        queryKey: ['authme'],
        queryFn: () => axios.get(`/auth/me`).then((res) =>res.data)
    })

    useEffect(() => {
        if(!isAuth) refetch()
    }, [navigate]);

    return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/post/:id" element={<Post/>}/>
                  <Route path="*" element={<NoPage/>}/>
              </Routes>
          </Layout>
      </div>
  );
}

export default App;
