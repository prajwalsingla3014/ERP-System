import React ,{Component} from 'react'
import {Bar} from "react-chartjs-2"
export default class customerdetail extends Component {
    constructor(props)
    {
        super(props);
        this.state={
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
                                    <div className="col-md-4">
                                        <div className="card card-success card-outline">
                                            <div className="card-body box-profile">
                                                <h6 className="profile-username" style={{fontSize:'18px',fontFamily:'Acme'}}>{this.props.customer.display_name}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.email}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.mobile}</h6>
                                            </div>
                                        </div>
                                        <div className="card card-success card-outline">
                                            <div className="card-body box-profile">
                                                <h6 className="profile-username" style={{fontSize:'18px',fontFamily:'Acme'}}>Billing Address</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.billing_address.address}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.billing_address.city}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.billing_address.zip_code}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.billing_address.state.name + "," + this.props.customer.payment_details.billing_address.country}</h6>
                                            </div>
                                        </div>
                                        <div className="card card-success card-outline">
                                            <div className="card-body box-profile">
                                                <h6 className="profile-username" style={{fontSize:'18px',fontFamily:'Acme'}}>Shipping Address</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.shipping_address.address}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.shipping_address.city}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.shipping_address.zip_code}</h6>
                                                <h6 style={{fontSize:'16px',fontFamily:'Acme'}}>{this.props.customer.payment_details.shipping_address.state.name + "," + this.props.customer.payment_details.shipping_address.country}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card card-success card-outline">
                                            <div className="card-body box-profile">
                                                <h4 style={{fontSize:'20px',fontFamily:'Acme'}}>Sales</h4>
                                                <h4 className="text-danger" style={{fontSize:'20px',fontFamily:'Acme'}}>Rs {this.props.customer.total_amount}</h4>
                                                <h4 style={{marginTop:'-63px',fontSize:'20px',marginLeft:'200px',fontFamily:'Acme'}}>Unused Credits</h4>
                                                <h4 className="text-danger" style={{marginLeft:'200px',marginTop:'0px',fontSize:'20px',fontFamily:'Acme'}}>Rs 0.00</h4>
                                                <h4 style={{fontSize:'20px',marginLeft:'200px',marginTop:'15px',fontFamily:'Acme'}}>Payment due period</h4>
                                                <h4 className="text-danger" style={{fontSize:'20px',marginLeft:'200px',marginTop:'0px',fontFamily:'Acme'}}>{this.props.customer.payment_details.payment_terms.name}</h4>
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
