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
                        backgroundColor:'rgba(54,162,235,.6),rgba(50,100,212,0.6)'
                    },
                    {
                        label:'Expense',
                        data:[
                            50000,
                            70000,
                            55000,
                            68000,
                            85000,
                            48000
                        ],
                        barThickness:30,
                        backgroundColor:'rgba(255,206,86,.6)'
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
                                        }
                                    }],
                                    yAxes:[{
                                        scaleLabel:{
                                            display:true,
                                            labelString:'Amount'
                                        }
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
                                <h6 className="card-title">Sales,Expense and Dues</h6>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Sales</th>
                                            <th>Expense</th>
                                            <th>Dues</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Today</td>
                                            <td>Rs 5000</td>
                                            <td>Rs 5500</td>
                                            <td>Rs 200</td>
                                        </tr>
                                        <tr>
                                            <td>This Week</td>
                                            <td>Rs 50000</td>
                                            <td>Rs 55000</td>
                                            <td>Rs 20000</td>
                                        </tr>
                                        <tr>
                                            <td>This Month</td>
                                            <td>Rs 150000</td>
                                            <td>Rs 10000</td>
                                            <td>Rs 60000</td>
                                        </tr>
                                        <tr>
                                            <td>This Quarter</td>
                                            <td>Rs 700000</td>
                                            <td>Rs 650000</td>
                                            <td>Rs 100000</td>
                                        </tr>
                                        <tr>
                                            <td>This Year</td>
                                            <td>Rs 10000000</td>
                                            <td>Rs 9000000</td>
                                            <td>Rs 2000000</td>
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
