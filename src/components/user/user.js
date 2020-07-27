import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
export default class user extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            employee:[{
                id:' ',
                first_name:' ',
                last_name:' ',
                display_name:' ',
                email:' ',
                phone:' ',
                payment_details:{
                    billing_address:{
                        address:' ',
                        city:' ',
                        state:' ',
                        zip_code:' '
                    }, 
                    payment_terms:{
                        name:' '
                    }              
                },
                industry_details:{
                    name:' '
                },     
            }]
            }
    }
    componentDidMount()
    {
        axios.get("https://farzi-erp.herokuapp.com/persons_manager/employee/")
            .then(res => {
                this.setState({employee:res.data})
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-success card-outline">
                                <div className="card-body">
                                    <h4 style={{fontSize:'22px',fontFamily:'Acme'}}>Personal Information</h4>
                                    <div className="row">
                                        <div className="col-3">
                                            <h3 className="profile-username mt-3" style={{fontSize:'20px',fontFamily:'Acme',margintop:'100px'}}>{this.state.employee[0].display_name}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="profile-username mt-3" style={{fontSize:'20px',fontFamily:'Acme',margintop:'100px'}}>{this.state.employee[0].company_name}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].email}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].mobile}</h3>
                                        </div>
                                    </div>
                                    <br/>
                                    <h4  style={{fontSize:'22px',fontFamily:'Acme'}}>Address</h4>
                                    <div className="row">
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].payment_details.billing_address.address}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].payment_details.billing_address.city}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].payment_details.billing_address.zip_code}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].payment_details.billing_address.state.name + ',' + this.state.employee[0].payment_details.billing_address.country}</h3>
                                        </div>
                                    </div>
                                    <br />
                                    <h4  style={{fontSize:'22px',fontFamily:'Acme'}}>Other Details</h4>
                                    <div className="row">
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>Industry Details</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].industry_details.name}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>Payment Terms</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.state.employee[0].payment_details.payment_terms.name}</h3>
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
