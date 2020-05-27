import React from 'react'
import SideNav from './components/sidenav/sidenav';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import {BrowserRouter} from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div style={{backgroundColor:'#fafdd6',width:'100%'}}>
        <Header />
        <SideNav />
        <Dashboard/>
      </div>
    </BrowserRouter>
  )
}
