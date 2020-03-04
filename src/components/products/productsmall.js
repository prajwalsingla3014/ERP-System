import React, { Component } from 'react'

export default class productsmall extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <h6>No.{this.props.product.no}</h6>
                                </div>
                                <div className="col-7">
                                    <h6>{this.props.product.name}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
