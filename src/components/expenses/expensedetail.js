import React, { Component } from 'react'

export default class expensedetail extends Component {
    render() {
        return (
            <div>
            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.props.expense.customer.display_name}</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={this.props.cancelHandler}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <h5 className="ml-5 mt-2" style={{fontSize:'20px',fontFamily:'Acme'}}>Item Type</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="mt-2" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.props.expense.expense_type}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h5 className="ml-5 mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>HSN Code</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.props.expense.hsn_code}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h5 className="ml-5 mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>Category</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.props.expense.category.name}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h5 className="ml-5 mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>Amount</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.props.expense.amount}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h5 className="ml-5 mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>GST</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.props.expense.gst.name}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h5 className="ml-5 mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>Destination Of Supply</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5 className="mt-4" style={{fontSize:'20px',fontFamily:'Acme'}}>{this.props.expense.customer.payment_details.shipping_address.state.name}</h5>
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
