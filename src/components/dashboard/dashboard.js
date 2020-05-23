import React, { Component } from 'react'
import CustomersForm from '../customers/customersform';
import Customers from '../customers/customers';
import SuppliersForm from '../suppliers/suppliersform';
import Suppliers from '../suppliers/suppliers';
import User from "../user/user";
import {Route,Link} from 'react-router-dom';
import InvoiceCreate from '../invoice/invoicecreate';
import Invoices from "../invoice/invoices";
import DashboardContent from "../dashboard/dashboardcontent";
import Products from "../products/products";
import ProductCreate from "../products/productcreate";
import Sale from "../sales/sale";
import SideMenu from "../preferences/sidemenu";
import Users from "../user/users";
import Purchase from "../purchase/purchase";
import PurchaseCreate from "../purchase/purchasecreate";
export default class dashboard extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-4">
                                    <h1 className="mt-2 text-dark" style={{fontFamily:'Acme',fontSize:'30px'}}>Dashboard</h1>
                                </div>
                                <div className="col-sm-8">
                                    <h6 className="mt-3" style={{marginLeft:'440px',color:'#868785',fontFamily:'Acme',fontSize:'18px'}}>Helpline - 1800 102 5671</h6>
                                    <h6 style={{fontWeight:'normal',marginLeft:'460px',fontSize:'12px',marginTop:'-5px',color:'#868785',fontFamily:'Acme',fontSize:'13px'}}>Mon-Sat 9:00AM - 7:00PM</h6>
                                    <h6 style={{marginLeft:'660px',marginTop:'-48px',fontFamily:'Acme',fontSize:'20px'}}><Link to="/">Home</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Route exact path={"/"} component={DashboardContent} />
                    <Route path={"/customerform"} component={CustomersForm} />
                    <Route path={"/customers"} component={Customers} />
                    <Route path={"/supplierform"} component={SuppliersForm} />
                    <Route path={"/suppliers"} component={Suppliers} />
                    <Route path={"/invoice"}>
                        <Invoices />
                    </Route>
                    <Route path={"/invoicecreate"} component={InvoiceCreate} />
                    <Route path={"/user"} component={User} />
                    <Route path={"/products"} component={Products} />
                    <Route path={"/productcreate"} component={ProductCreate} />
                    <Route path={"/sale"} component={Sale} />
                    <Route path={"/settings"} component={SideMenu} />
                    <Route path={"/userprofile"} component={Users} />
                    <Route path={"/purchase"} component={Purchase} />
                    <Route path={"/purchasecreate"} component={PurchaseCreate} />
                </div>
            </div>
        )
    }
}
