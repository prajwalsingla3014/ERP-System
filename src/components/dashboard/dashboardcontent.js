import React, { Component } from 'react'
import {Bar, Line} from "react-chartjs-2";
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class dashboardcontent extends Component {
    constructor(props)
    {
        super();
        this.state={
            saledata:{
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
            expensedata:{
                stats:{
                    today:" ",
                    week:" ",
                    month:" ",
                    quarter:" ",
                    year:" "
                }
            },
            barData:{
            },
            pieData:{

            }
        }
    }
    async componentDidMount() {
        await axios.get("https://farzi-erp.herokuapp.com/invoice/graph_data/")
            .then(res => {
                const dat=res.data;
                let salesdata={...dat.sale.stats};
                let expensesdata={...dat.purchase.stats};
                this.setState({saledata:salesdata,expensedata:expensesdata,pieData:{
                    labels:Object.keys(dat.sale.stats),
                    datasets:[
                        {
                            label:'Sale',
                            data:["50000","450000","1400000","4500000","17000000"],
                            backgroundColor:'#6fdbc9',
                            borderColor:'#6fdbc9',
                            borderWidth: 3,
                            fill:false,
                            lineTension: 0.5,
                        },
                        {
                            label:'Expenses',
                            data:["30000","750000","1900000","2500000","14000000"],
                            backgroundColor:'#f48be3' ,
                            borderColor:'#f48be3' ,
                            borderWidth: 3,
                            fill:false,
                            lineTension: 0.5,
                        }
                    ]
                    },
                    barData: {
                        labels:Object.keys(dat.sale.monthly),
                        datasets:[
                            {
                                label:'Sale',
                                data:Object.values(dat.sale.monthly),
                                barThickness:10,
                                backgroundColor:'#6fdbc9'
                            },
                            {
                                label:'Expenses',
                                data:Object.values(dat.purchase.monthly),
                                barThickness:10,
                                backgroundColor:'#f48be3' 
                            }
                        ]
                    }
                })

                console.log(res);
            })
            .catch(err => {
                console.log(err);
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
                                <h6 style={{fontWeight:'normal',marginLeft:'420px',marginTop:'-5px',color:'#868785',fontFamily:'Acme',fontSize:'13px'}}>Mon-Sat 9:00AM - 7:00PM</h6>
                                <p style={{marginLeft:'625px',marginTop:'-48px',fontFamily:'Acme',fontSize:'20px',color:'#021132'}}><Link to="/" style={{color:'#021132'}}>Home</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card"  style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                    <div className="card-body">
                        <Bar
                            data={this.state.barData}
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
                                            fontColor:'#838181',
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
                                            stepSize:50000
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
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.saledata.today ? this.state.saledata.today : 0}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.expensedata.today ? this.state.expensedata.today : 0}</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Week</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.saledata.week ? this.state.saledata.week : 0}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.expensedata.week ? this.state.expensedata.week : 0}</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Month</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.saledata.month ? this.state.saledata.month : 0}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.expensedata.month ? this.state.expensedata.month : 0}</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Quarter</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.saledata.quarter}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.expensedata.quarter}</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Year</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.saledata.year}</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs {this.state.expensedata.year}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card"  style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                            <div className="card-body">
                                <Line 
                                    data={this.state.pieData}
                                    height={200}
                                    options={{
                                        legend:{
                                          display:true,
                                        },
                                        scales:{
                                            xAxes:[{
                                                scaleLabel:{
                                                    display:true,
                                                    labelString:'Time'
                                                },
                                                gridLines:{
                                                    drawBorder:true,
                                                    borderBottom:'10px solid black'
                                                },
                                                ticks:{
                                                    fontColor:'#838181',
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
                                                },
                                            }]
                                        }
                                      }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    }
}
