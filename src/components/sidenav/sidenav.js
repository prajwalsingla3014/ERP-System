import React from 'react'
import { Link} from 'react-router-dom';
export default function sidenav() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="sidenav.js" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="User" className="brand-image img-circle elevation-3 mt-1"/>
                    <span className="brand-text ml-1" style={{fontSize:'26px'}}>
                        <Link to="/user">
                            User
                        </Link>
                    </span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-file-invoice" style={{fontSize:'18px'}}></i>
                                    <p className="ml-1" style={{fontSize:'18px'}}>
                                        <Link to="/invoice" style={{color:'#25b0b9'}}>
                                            Invoice
                                        </Link>
                                        <Link to="/invoicecreate">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#28a745',marginLeft:'60px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-users" style={{fontSize:'18px'}} />
                                    <p className="ml-1" style={{fontSize:'18px'}}>
                                        <Link to="/customers">
                                            Customers
                                        </Link>
                                        <Link to="/customerform">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#28a745',marginLeft:'30px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-users" style={{fontSize:'18px'}}/>
                                    <p className="ml-1" style={{fontSize:'18px'}}>
                                        <Link to="/suppliers">
                                            Suppliers
                                        </Link>
                                        <Link to="/supplierform">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#28a745',marginLeft:'41px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-boxes" style={{fontSize:'18px'}} />
                                    <p className="ml-1" style={{fontSize:'18px'}}>
                                        <Link to="/products">
                                            Products
                                        </Link>
                                        <Link to="/productcreate">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#28a745',marginLeft:'43px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-warehouse" style={{fontSize:'18px'}}/>
                                    <p className="ml-1" style={{fontSize:'18px'}}>
                                        Warehouse
                                        <Link to="/">
                                            <i className="fas fa-plus-circle mt-3 ml-4" style={{fontSize:'18px',color:'#28a745'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-line" style={{fontSize:'18px'}}/>
                                    <p className="ml-1" style={{fontSize:'18px'}}>
                                        <Link to="/sale">
                                            Sales
                                        </Link>
                                        <Link to="/">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#28a745',marginLeft:'74px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
