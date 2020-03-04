import React, { PureComponent } from 'react'

class Productsdetail extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px'}}>Products Details</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={this.props.cancelHandler}>
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-2">Item Type</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-2">Sales Item</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4">Unit</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4">{this.props.product.unit}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4">Product ID</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4">{this.props.product.id}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4">Description</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4">{this.props.product.description}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4">Quantity</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4">{this.props.product.quantity}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4">Selling Price</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4">Rs {this.props.product.amount}</h5>
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

export default Productsdetail