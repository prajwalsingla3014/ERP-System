import React from 'react'
import { Link} from 'react-router-dom';
export default function sidenav() {
    return (
        <div>
            <aside className="main-sidebar" style={{backgroundColor:'#f7f7f7'}}>
                <a href="#" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="User" className="brand-image img-circle elevation-3 mt-1"/>
                    <span className="brand-text ml-1" style={{fontSize:'26px'}}>
                        <Link to="/user" style={{color:'#021132'}}>
                            User
                        </Link>
                    </span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" style={{fontSize:'18px',marginTop:'10px',marginLeft:'-15px'}}></i>
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="/" style={{color:'#021132'}}>
                                            Dashboard
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-file-invoice" style={{fontSize:'15px',marginLeft:'-15px'}}></i>
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="/invoice" style={{color:'#021132'}}>
                                            Invoice
                                        </Link>
                                        <Link to="/invoicecreate">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#021132',marginLeft:'116px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-users" style={{fontSize:'15px',marginLeft:'-15px'}} />
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="/customers" style={{color:'#021132'}}>
                                            Customers
                                        </Link>
                                        <Link to="/customerform">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#021132',marginLeft:'90px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-users" style={{fontSize:'15px',marginLeft:'-15px'}}/>
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="/suppliers" style={{color:'#021132'}}>
                                            Suppliers
                                        </Link>
                                        <Link to="/supplierform">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#021132',marginLeft:'101px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-shopping-basket" style={{fontSize:'15px',marginLeft:'-15px'}}/>
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="/purchase" style={{color:'#021132'}}>
                                            Purchase
                                        </Link>
                                        <Link to="/purchasecreate">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#021132',marginLeft:'103px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-boxes" style={{fontSize:'15px',marginLeft:'-15px'}} />
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="/products" style={{color:'#021132'}}>
                                            Products
                                        </Link>
                                        <Link to="/productcreate">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#021132',marginLeft:'105px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-truck" style={{fontSize:'15px',marginLeft:'-15px'}} />
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="" style={{color:'#021132'}}>
                                            Delivery Challans
                                        </Link>
                                        <Link to="">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#021132',marginLeft:'43px'}}></i>
                                        </Link>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-file-invoice-dollar" style={{fontSize:'15px',marginLeft:'-15px'}}/>
                                    <p className="ml-1" style={{fontSize:'18px',fontFamily:'Acme'}}>
                                        <Link to="/sale" style={{color:'#021132'}}>
                                            GST Filling
                                        </Link>
                                        <Link to="/">
                                            <i className="fas fa-plus-circle mt-3" style={{fontSize:'18px',color:'#021132',marginLeft:'90px'}}></i>
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
