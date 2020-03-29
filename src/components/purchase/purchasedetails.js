import React from 'react'
export default function purchasedetails(props) {
    return (
        <div>
            <section className="content">
                <div className="invoice p-3 mb-3" id="invoice1">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title" style={{fontSize:'20px'}}>Purchase</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={props.cancelHandler}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row invoice-info">
                                <div className="col-sm-5">
                                    <h5 className="mt-4 ml-5">Purchase No</h5>
                                    <h6 className="ml-5">{props.purchase.no}</h6>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="mt-4 ml-3">Date Of Purchase</h5>
                                    <h6 className="ml-3">{props.purchase.date}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    <h5 className="mt-2 ml-5 font-weight-bolder">Delivered To</h5>
                                    <h6 className="ml-5">Address</h6>
                                    <h6 className="ml-5 mt-2">City</h6>
                                    <h6 className="ml-5">Pincode</h6>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="mt-2 ml-3 font-weight-bolder">{props.purchase.name}</h5>
                                    <h6 className="ml-3">Shipra Sun City Apartments</h6>
                                    <h6 className="ml-3 mt-1">Noida</h6>
                                    <h6 className="ml-3 ">201309</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    <table className="table table-bordered mt-1">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Description</th>
                                                <th>Quanity</th>
                                                <th>Unit</th>
                                                <th>Cost/Quantity</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>LED</td>
                                                <td>1</td>
                                                <td>Rs</td>
                                                <td>50,000</td>
                                                <td>50,000</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Oven</td>
                                                <td>3</td>
                                                <td>Rs</td>
                                                <td>30,000</td>
                                                <td>90,000</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Mobile</td>
                                                <td>2</td>
                                                <td>Rs</td>
                                                <td>12,000</td>
                                                <td>24,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">

                                </div>
                                <div className="col-4">
                                    <h5 className="ml-5 mt-3" style={{fontSize:'18px'}}>Subtotal</h5>
                                    <h5 className="ml-5 mt-3" style={{fontSize:'18px'}}>Tax</h5>
                                    <h5 className="ml-5 mt-3" style={{fontSize:'18px'}}>Discount</h5>
                                    <hr className="ml-5"></hr>
                                    <h5 className="ml-5 mt-3" style={{fontSize:'18px'}}>Total</h5>
                                </div>
                                <div className="col-2">
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>Rs 1,64,000</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>18%</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>10%</h5>
                                    <hr style={{marginLeft:'-15px',width:'100%'}}></hr>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>{props.purchase.amount}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="invoice p-3 mb-3" id="invoice2">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="ml-5">Invoice</h1>
                        </div>
                    </d                <Route path={"/invoice/invoicedetails/invoice1"} component={InvoiceDetails} />iv>
                    <div className="row invoice-info">
                        <div className="col-sm-3">
                            <h3 className="mt-4 ml-5">Invoice No</h3>
                            <h6 className="ml-5">00002</h6>
                        </div>
                        <div className="col-sm-3">
                            <h3 className="mt-4 ml-3">Date Of Issue</h3>
                            <h6 className="ml-3">04/02/2020</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="mt-5 ml-5 font-weight-bolder">Billed To</h5>
                            <h6 className="ml-5">Address</h6>
                            <h6 className="ml-5">City</h6>
                            <h6 className="ml-5">Pincode</h6>
                        </div>
                        <div className="col-sm-3">
                            <h5 className="mt-5 ml-3 font-weight-bolder">Rohit Bansal</h5>
                            <h6 className="ml-3">Shipra Sun City Apartments</h6>
                            <h6 className="ml-3">Noida</h6>
                            <h6 className="ml-3">201309</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table mt-5">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Description</th>
                                        <th>Quanity</th>
                                        <th>Unit</th>
                                        <th>Cost/Quantity</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>LED</td>
                                        <td>1</td>
                                        <td>Rs</td>
                                        <td>40,000</td>
                                        <td>40,000</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Oven</td>
                                        <td>3</td>
                                        <td>Rs</td>
                                        <td>40,000</td>
                                        <td>120,000</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Mobile</td>
                                        <td>2</td>
                                        <td>Rs</td>
                                        <td>15,000</td>
                                        <td>30,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">

                        </div>
                        <div className="col-2">
                            <h5 className="ml-5" style={{fontSize:'18px'}}>Subtotal</h5>
                            <h5 className="ml-5 mt-3" style={{fontSize:'18px'}}>Tax</h5>
                            <h5 className="ml-5 mt-3" style={{fontSize:'18px'}}>Discount</h5>
                            <hr className="ml-5"></hr>
                            <h5 className="ml-5 mt-3" style={{fontSize:'18px'}}>Total</h5>
                        </div>
                        <div className="col-2">
                            <h5 style={{fontSize:'18px',marginLeft:'-10px'}}>Rs 1,90,000</h5>
                            <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>20%</h5>
                            <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>10%</h5>
                            <hr style={{marginLeft:'-15px',width:'70%'}}></hr>
                            <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>Rs 209000</h5>
                        </div>
                    </div>
    </div>*/}
            </section>
        </div>
    )
}
