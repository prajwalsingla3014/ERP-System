import React from 'react'
import CustomersForm from '../customers/customersform';
import Customers from '../customers/customers';
import SuppliersForm from '../suppliers/suppliersform';
import SuppliersTable from '../suppliers/supplierstable';
import User from "../user/user";
import {Route,BrowserRouter} from 'react-router-dom';
import InvoiceCreate from '../invoice/invoicecreate';
import Invoices from "../invoice/invoices";
import Products from "../products/products";
import ProductCreate from "../products/productcreate";
import Sale from "../sales/sale";
export default function dashboard() {
    return (
    <div className="content-wrapper">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Dashboard</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
            <div className="container-fluid">
                {/*<div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-info">
                            <div className="inner">
                                <h3>150</h3>
                                <p>New Orders</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-bag" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-success">
                            <div className="inner">
                                <h3>83<sup style={{fontSize: 20}}>%</sup></h3>
                                <p>Sales</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-stats-bars" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-warning">
                            <div className="inner">
                                <h3 className="text-white">44</h3>
                                <p className="text-white">New Customers</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-person-add" />
                            </div>
                            <a href="#" className="small-box-footer"><span className="text-white">More info</span> <i className="fas fa-arrow-circle-right" style={{color:'white'}}/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-danger">
                            <div className="inner">
                                <h3>30</h3>
                                <p>Products</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-boxes" />
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                </div>*/}
                <Route path={"/customerform"} component={CustomersForm} />
                <Route path={"/customers"} component={Customers} />
                <Route path={"/supplierform"} component={SuppliersForm} />
                <Route path={"/suppliertable"} component={SuppliersTable} />
                <Route path={"/invoice"} component={Invoices} />
                <Route path={"/invoicecreate"} component={InvoiceCreate} />
                <Route path={"/user"} component={User} />
                <Route path={"/products"} component={Products} />
                <Route path={"/productcreate"} component={ProductCreate} />
                <Route path={"/sale"} component={Sale} />
            </div>
    </div>
    );
}
