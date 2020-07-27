import React from 'react'
import Settings from "../header/settings";
import {Link} from "react-router-dom"
export default function header() {
    return (
        <div>
            <nav className="main-header navbar navbar-expand" style={{backgroundColor:'#f7f7f7',borderBottom:'#f7f7f7'}}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" style={{color:'#021132',fontSize:'20px',marginTop:'10px'}}/></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a className="nav-link"><p style={{fontFamily:'Acme',fontSize:'18px',marginTop:'7px',color:'#021132'}}><Link to="/" style={{color:'#021132'}}>Home</Link></p></a>
                    </li>
                </ul>
                <Settings />
            </nav>
        </div>
    )
}
