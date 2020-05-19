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
                                    <h3 className="card-title" style={{fontSize:'20px'}}>{this.props.product.name}</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={this.props.cancelHandler}>
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-2" style={{fontSize:'18px'}}>Item Type</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-2" style={{fontSize:'18px'}}>Sales Item</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4" style={{fontSize:'18px'}}>HSN Code</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4" style={{fontSize:'18px'}}>{this.props.product.hsn_code}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4" style={{fontSize:'18px'}}>Unit</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4" style={{fontSize:'18px'}}>{this.props.product.unit}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4" style={{fontSize:'18px'}}>Tax</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4" style={{fontSize:'18px'}}>{this.props.product.tax.name + " " + this.props.product.tax.rate}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4" style={{fontSize:'18px'}}>Description</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4" style={{fontSize:'18px'}}>{this.props.product.description}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4" style={{fontSize:'18px'}}>Quantity</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4" style={{fontSize:'18px'}}>{this.props.product.quantity_total}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="ml-5 mt-4" style={{fontSize:'18px'}}>Selling Price</h5>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="mt-4" style={{fontSize:'18px'}}>Rs {this.props.product.selling_price}</h5>
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