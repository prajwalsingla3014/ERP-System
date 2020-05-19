import React from 'react'
import Settings from "../header/settings";
export default function header() {
    return (
        <div >
            <nav className="main-header navbar navbar-expand navbar-white navbar-light mt-2">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"/></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link"><p>Home</p></a>
                    </li>
                </ul>
                <Settings />
            </nav>
        </div>
    )
}
