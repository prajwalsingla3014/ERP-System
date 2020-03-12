import React, { Component } from 'react'
import {Bar} from "react-chartjs-2";
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
                        backgroundColor:'rgba(54,162,235,.6)'
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
        )
    }
}
