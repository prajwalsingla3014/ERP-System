import React, { Component } from 'react'
import {Bar} from "react-chartjs-2";
export default class supplierdetail extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            chartData:{
                labels:['Aug 2019','Sep 2019','Oct 2019','Nov 2019','Dec 2019','Jan 2019'],
                datasets:[
                    {
                        label:'Sales Vs Month',
                        data:[
                            47000,
                            75000,
                            55500,
                            67000,
                            87600,
                            50000
                        ],
                        barThickness:30,
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,.6)',
                            'rgba(255,206,86,.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(255,159,64,0.6)'
                        ]
                    }
                ]
            }
        }
    }
    render()
    {
        return (
            <div>
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={this.props.cancelHandler}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-success card-outline">
                                        <div className="card-body">
                                            <h4 style={{fontSize:'22px',fontFamily:'Acme'}}>Personal Information</h4>
                                            <div className="row">
                                                    <div className="col-4">
                                                        <h6 className="profile-username mt-3" style={{fontSize:'18px',fontFamily:'Acme',margintop:'100px'}}>{this.props.supplier.display_name}</h6>
                                                    </div>
                                                    <div className="col-5">
                                                        <h6 className="mt-3" style={{fontSize:'18px',fontFamily:'Acme',margintop:'100px'}}>{this.props.supplier.email}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="mt-3" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.mobile}</h6>
                                                    </div>
                                            </div>
                                            <br/>
                                                <h4 style={{fontSize:'22px',fontFamily:'Acme'}}>Address</h4>
                                                <h6 className="profile-username mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>Billing Address</h6>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.billing_address.address}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.billing_address.city}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.billing_address.zip_code}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.billing_address.state.name + "," + this.props.supplier.payment_details.billing_address.country}</h6>
                                                    </div>
                                                </div>
                                                <h6 className="profile-username mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>Shipping Address</h6>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.shipping_address.address}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.shipping_address.city}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.shipping_address.zip_code}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="mt-2" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.shipping_address.state.name + "," + this.props.supplier.payment_details.shipping_address.country}</h6>
                                                    </div>
                                                </div>
                                                <h4 className="mt-3" style={{fontSize:'20px',marginTop:'15px',fontFamily:'Acme'}}>Payment due period</h4>
                                                <h4 className="text-danger" style={{fontSize:'20px',marginTop:'0px',fontFamily:'Acme'}}>{this.props.supplier.payment_details.payment_terms.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )   
        }
    }
