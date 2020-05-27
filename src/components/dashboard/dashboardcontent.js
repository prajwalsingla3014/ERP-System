import React, { Component } from 'react'
import {Bar} from "react-chartjs-2";
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class dashboardcontent extends Component {
    constructor(props)
    {
        super();
        this.state={
            graphdata:{
                monthly:{
                },
                stats:{
                    today:" ",
                    week:" ",
                    month:" ",
                    quarter:" ",
                    year:" "
                }
            },
            chartData:{
                /*labels:['April 2020','May 2020','June 2020','July 2020','Aug 2020','Sept 2020','Oct 2020','Nov 2020','Dec 2020','Jan 2021','Feb 2021','Mar 2021'],
                datasets:[
                    {
                        label:"Sale",
                        data:this.state.graphdata,
                        barThickness:30,
                        backgroundColor:'rgba(97,249,85,.8)'
                    },
                    {
                        label:'Expenses',
                        data:[
                            50000,
                            70000,
                            55000,
                            68000,
                            85000,
                            48000
                        ],
                        barThickness:30,
                        backgroundColor:'rgba(250,28,10,.6)'
                    }
                ]*/
            }
        }
    }
    async componentDidMount() {
        await axios.get("https://farzi-erp.herokuapp.com/invoice/sale_data/")
            .then(res => {
                const dat=res.data;
                let bardata={...dat.monthly};
                console.log(bardata)
                this.setState({graphdata:res.data,chartData: {
                    labels:['April 2020','May 2020','June 2020','July 2020','Aug 2020','Sept 2020','Oct 2020','Nov 2020','Dec 2020','Jan 2021','Feb 2021','Mar 2021'],
                    datasets:[{
                        label:'Sale',
                        data:[bardata.April_2020,bardata.May_2020,bardata.June_2020,bardata.July_2020,bardata.August_2020,bardata.September_2020,bardata.October_2020,bardata.November_2020,bardata.December_2020,bardata.January_2021,bardata.February_2021,bardata.March_2021],
                        barThickness:10,
                        backgroundColor:'#6fdbc9'
                    }]
                }})
            })
    }
    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-4">
                                <h1 className="mt-2 " style={{fontFamily:'Acme',fontSize:'30px',color:'#021132'}}>Dashboard</h1>
                            </div>
                            <div className="col-sm-8">
                                <h6 className="mt-3" style={{marginLeft:'400px',color:'#868785',fontFamily:'Acme',fontSize:'18px'}}>Helpline - 1800 102 5671</h6>
                                <h6 style={{fontWeight:'normal',marginLeft:'420px',fontSize:'12px',marginTop:'-5px',color:'#868785',fontFamily:'Acme',fontSize:'13px'}}>Mon-Sat 9:00AM - 7:00PM</h6>
                                <p style={{marginLeft:'625px',marginTop:'-48px',fontFamily:'Acme',fontSize:'20px',color:'#021132'}}><Link to="/" style={{color:'#021132'}}>Home</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card"  style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                    <div className="card-body">
                        <Bar
                            data={this.state.chartData}
                            height={75}
                            options={{
                                legend:{
                                    display:true,
                                },
                                scales:{
                                    xAxes:[{
                                        scaleLabel:{
                                            display:true,
                                            labelString:'Month'
                                        },
                                        gridLines:{
                                            drawBorder:true,
                                            borderBottom:'10px solid black'
                                        },
                                        ticks:{
                                            fontColor:'#838181'
                                        }
                                    }],
                                    yAxes:[{
                                        scaleLabel:{
                                            display:true,
                                            labelString:'Amount'
                                        },
                                        gridLines:{
                                            display:false
                                        },
                                        ticks:{
                                            fontColor:'#9c9c9c',
                                            stepSize:10000
                                        },
                                    }]
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="card"  style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                            <div className="card-header">
                                <h6 className="card-title" style={{color:'#737673',fontFamily:'Acme',fontSize:'20px'}}>Sales and Expenses</h6>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{fontWeight:'normal',color:'#868785',fontFamily:'Acme'}}>SALES</th>
                                            <th style={{fontWeight:'normal',color:'#868785',fontFamily:'Acme'}}>EXPENSES</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{color:'#737673'}}>
                                        <tr style={{borderBottom:'0'}}>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Today</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.graphdata.stats.today}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 5500</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Week</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.graphdata.stats.week}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 50000</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Month</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.graphdata.stats.month}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 100000</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Quarter</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.graphdata.stats.quarter}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 650000</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Year</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.graphdata.stats.year}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 9000000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
