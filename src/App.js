import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Queryform from './components/Queryform'
import Login  from "./components/Login";
import Querydata from './components/Querydata';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Login />} />
          <Route path="query" element={<Queryform />} />
          <Route path="login" element={<Login />} />
          <Route path="Data" element={<Querydata />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
    )
    }   
 
  
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);



