import React, { Component } from 'react';

class customersmall extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <h6>{this.props.customer.name}</h6>
                            <h6> Rs {this.props.customer.amount}</h6>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default customersmall;