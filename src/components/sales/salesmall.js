import React, { Component } from 'react';

class salesmall extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <h6>{this.props.sale.name}</h6>
                                    <h6>{this.props.sale.amountwt}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default salesmall;