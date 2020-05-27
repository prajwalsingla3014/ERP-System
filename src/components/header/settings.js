import React from 'react'
import {Link} from 'react-router-dom';
function Settings() {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="fas fa-cog" style={{fontSize:'20px',color:'#021132'}} />
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <div className="media-body">
                                <i className="far fa-building"></i>
                                <Link to="/userprofile">
                                    <h6 style={{marginLeft:'25px',marginTop:'-21px',fontFamily:'Acme',fontSize:'20px',color:'#021132'}}>Organization Profile</h6>
                                </Link>
                            </div>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    )
}

export default Settings
