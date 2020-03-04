import React, { Component } from 'react';
import InvoiceRow from "../invoice/invoicerow";
class invoicecreatetable extends Component {
    render() {
        var onProductTableUpdate=this.props.onProductTableUpdate;
        var filterText=this.props.filterText;
        var product=this.props.products.map(function(product) {
            if(product.name.indexOf(filterText) === -1)
            {
                return ;
            }
            return (<InvoiceRow onProductTableUpdate={onProductTableUpdate} product={product} key={product.id} />)
        })
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title" style={{fontSize:'20px'}}>New Invoice</h3>
                            </div>
                            <form className="form-horizontal">
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Customer Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Invoice No</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Order No</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Invoice Date</label>
                                        <div className="col-sm-2">
                                            <input type="date" className="form-control"></input>
                                        </div>
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Terms</label>
                                        <div className="col-sm-2">
                                            <select className="form-control">
                                                <option>Due On Receipt</option>
                                                <option>Due end of month</option>
                                                <option>Due end of next month</option>
                                            </select>
                                        </div>
                                        <label className="col-sm-2 col-form-label " style={{fontSize:'20px'}}>Due Date</label>
                                        <div className="col-sm-2">
                                            <input type="date" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Salesperson</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Item Details</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Tax</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success"  onClick={this.props.onRowAdd}>Add Another Entry</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default invoicecreatetable;