import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class supplierstable extends Component {
    componentDidMount()
    {
        const script=document.createElement("script");
        script.src="js/customertablesort.js";
        script.async=true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Suppliers Details</h3>
                                </div>
                                <div className="card-body">
                                    <table id="customerdetail" className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>Amount</th>
                                                <th>Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        Suresh Goel
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        xyz@gmail.com
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        Noida
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        LED TV,Mobile
                                                    </Link>
                                                </td>
                                                <td>9899234103</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        Rohit Bansal
                                                    </Link>
                                                </td>
                                                <td>xywz@gmail.com</td>
                                                <td>Noida</td>
                                                <td>LED TV</td>
                                                <td>9879230103</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        Mohit Sinha
                                                    </Link>
                                                </td>
                                                <td>axyz@gmail.com</td>
                                                <td>Greater Noida</td>
                                                <td>Refrigerator</td>
                                                <td>9822234501</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        Harish Gupta
                                                    </Link>
                                                </td>
                                                <td>nxymz@gmail.com</td>
                                                <td>Delhi</td>
                                                <td>Soundbar</td>
                                                <td>9829254703</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link to="/suppliertable/supplierdetail" style={{color:'#1c1f21'}}>
                                                        Rahul Singh
                                                    </Link>
                                                </td>
                                                <td>bxyz@gmail.com</td>
                                                <td>Gurugram</td>
                                                <td>LED TV</td>
                                                <td>9693235103</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
