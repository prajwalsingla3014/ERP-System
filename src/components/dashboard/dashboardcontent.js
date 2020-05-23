import React, { Component } from 'react'
import {Bar} from "react-chartjs-2";
import {Link} from 'react-router-dom';
export default class dashboardcontent extends Component {
    constructor(props)
    {
        super();
        this.state={
            chartData:{
                labels:['Aug 2019','Sept 2019','Oct 2019','Nov 2019','Dec 2019','Jan 2020'],
                datasets:[
                    {
                        label:"Sale",
                        data:[
                            47000,
                            75000,
                            55500,
                            67000,
                            87600,
                            50000
                        ],
                        barThickness:30,
                        backgroundColor:'rgba(80,248,67,.8)'
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
                ]
            }
        }
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <Bar
                            data={this.state.chartData}
                            height={100}
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
                                            drawBorder:true
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
                                            drawBorder:true,
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
                        <div className="card">
                            <div className="card-header">
                                <h6 className="card-title" style={{color:'#737673',fontFamily:'Acme',fontSize:'20px'}}>Sales,Expenses and Dues</h6>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{fontWeight:'normal',color:'#868785',fontFamily:'Acme'}}>SALES</th>
                                            <th style={{fontWeight:'normal',color:'#868785',fontFamily:'Acme'}}>EXPENSES</th>
                                            <th style={{fontWeight:'normal',color:'#868785',fontFamily:'Acme'}}>DUES</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{color:'#737673'}}>
                                        <tr style={{borderBottom:'0'}}>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Today</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 5000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 5500</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 200</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Week</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 50000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 55000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 20000</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Month</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 150000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 10000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 60000</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Quarter</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 700000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 650000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 100000</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>This Year</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 10000000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 9000000</td>
                                            <td style={{fontFamily:'Acme',fontSize:'16px'}}>Rs 2000000</td>
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
