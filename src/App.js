import React from 'react'
import SideNav from './components/sidenav/sidenav';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import {BrowserRouter} from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SideNav />
        <Dashboard/>
      </div>
    </BrowserRouter>
  )
}
