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
import ExpenseCreate from "../expenses/expensecreate";
import Expenses from "../expenses/expenses";
import Footer from "../footer/footer";
export default class dashboard extends Component {
    render() {
        return (
            <div className="content-wrapper" style={{backgroundColor:'#f7f7f7'}}>
                <div className="container-fluid">
                    <br />
                    <div className="card border-0" style={{borderRadius:'10px',backgroundColor:'#fcfeff',opacity:'0.8'}}>
                        <div className="card-body">
                            <Route exact path={"/"} component={DashboardContent} />
                            <Route exact path={"/"} component={Footer} />
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
                            <Route path={"/expensescreate"} component={ExpenseCreate} />
                            <Route path={"/expenses"} component={Expenses} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
