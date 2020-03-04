import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
export default class user extends Component {
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
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-success card-outline">
                                <div className="card-body box-profile">
                                    <h3 className="profile-username">Mr Suresh Goel</h3>
                                    <h3 style={{fontSize:'20px'}}>xyz@gmail.com</h3>
                                    <h3 style={{fontSize:'20px'}}>9899234103</h3>
                                </div>
                            </div>
                            <div className="card card-success card-outline">
                                <div className="card-body box-profile">
                                    <h3 className="profile-username">Billing Address</h3>
                                    <h3 style={{fontSize:'18px'}}>3rd Floor,Mayur Gardens</h3>
                                    <h3 style={{fontSize:'18px'}}>Opp HDFC Bank,G.S Road</h3>
                                    <h3 style={{fontSize:'18px'}}>Guwahati,781005</h3>
                                    <h3 style={{fontSize:'18px'}}>Assam</h3>
                                </div>
                            </div>
                            <div className="card card-success card-outline">
                                <div className="card-body box-profile">
                                    <h3 className="profile-username">Shipping Address</h3>
                                    <h3 style={{fontSize:'18px'}}>3rd Floor,Mayur Gardens</h3>
                                    <h3 style={{fontSize:'18px'}}>Opp HDFC Bank,G.S Road</h3>
                                    <h3 style={{fontSize:'18px'}}>Guwahati,781005</h3>
                                    <h3 style={{fontSize:'18px'}}>Assam</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card card-success card-outline">
                                <div className="card-body box-profile">
                                    <h3 style={{fontSize:'24px'}}>Sales</h3>
                                    <h4 className="text-danger" style={{fontSize:'22px'}}>Rs 52,900</h4>
                                    <h3 style={{marginTop:'-70px',fontSize:'24px',marginLeft:'250px'}}>Unused Credits</h3>
                                    <h4 className="text-danger" style={{marginLeft:'500px',marginTop:'-39px'}}>Rs 0.00</h4>
                                    <h3 style={{fontSize:'24px',marginLeft:'250px'}}>Payment due period</h3>
                                    <h4 className="text-danger" style={{marginLeft:'500px',marginTop:'-37px'}}>Due on Receipt</h4>
                                    <h3 className="text-center mt-5">
                                        Sales
                                    </h3>
                                    <Bar
                                        data={this.state.chartData}
                                        height={150}
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
                </section>
            </div>
        )
    }
}
