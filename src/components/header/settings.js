import React from 'react'
import {Link} from 'react-router-dom';
function Settings() {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="fas fa-cog" style={{fontSize:'20px'}} />
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <div className="media-body">
                                <i className="fas fa-sliders-h"></i>
                                <Link to="/settings">
                                    <h6 style={{marginLeft:'25px',marginTop:'-21px'}}>Preferences</h6>
                                </Link>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <div className="media-body">
                                <i className="far fa-building"></i>
                                <h6 style={{marginLeft:'25px',marginTop:'-21px'}}>Organization Profile</h6>
                            </div>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    )
}

export default Settings
