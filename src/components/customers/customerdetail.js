import React ,{Component} from 'react'
import {Bar} from "react-chartjs-2"
export default class customerdetail extends Component {
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
                                                <h3 className="text-center mt-5" style={{fontFamily:"Acme",fontSize:'20px'}}>
                                                    Sales
                                                </h3>
                                                <Bar
                                                    data={this.state.chartData}
                                                    height={164}
                                                    options={{
                                                        legend:{
                                                            display:true,
                                                        },
                                                        scales:{
                                                            xAxes:[{
                                                                scaleLabel:{
                                                                    display:true,
                                                                    labelString:'Month'
                                                                }
                                                            }],
                                                            yAxes:[{
                                                                scaleLabel:{
                                                                    display:true,
                                                                    labelString:'Sales'
                                                                }
                                                            }]
                                                        }
                                                    }}
                                                />
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
