import React from 'react'
export default function invoicedetails(props) {
    let tb=(props.invoice.sold_items).map((item,index) => {
        return ( <tr key={index}>
                <td>{item.id}</td>
                <td>{item.product.name + item.product.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.discount_type}</td>
                <td>{item.discount}</td>
                <td>{item.tax.rate} %</td>
                <td>{item.sub_total}</td>
        </tr>)
    })
    return (
        <div>
            <section className="content">
                {console.log}
                <div className="invoice p-3 mb-3" id="invoice1">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title" style={{fontSize:'20px'}}>Invoice</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={props.cancelHandler}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row invoice-info">
                                <div className="col-sm-5">
                                    <h5 className="mt-4 ml-5">Invoice No</h5>
                                    <h6 className="ml-5">{props.invoice.invoice_no}</h6>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="mt-4 ml-3">Date Of Issue</h5>
                                    <h6 className="ml-3">{(props.invoice.invoice_date).split("-").reverse().join("-")}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    <h5 className="mt-2 ml-5 font-weight-bolder">Billed To</h5>
                                    <h6 className="ml-5">Address</h6>
                                    <h6 className="ml-5 mt-2">City</h6>
                                    <h6 className="ml-5">Pincode</h6>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="mt-2 ml-3 font-weight-bolder">{props.invoice.customer.display_name}</h5>
                                    <h6 className="ml-3">{props.invoice.customer.payment_details.shipping_address.address}</h6>
                                    <h6 className="ml-3 mt-1">{props.invoice.customer.payment_details.shipping_address.city}</h6>
                                    <h6 className="ml-3 ">{props.invoice.customer.payment_details.shipping_address.zip_code}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    <table className="table table-bordered mt-1">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Product</th>
                                                <th>Quanity</th>
                                                <th>Price/Quantity</th>
                                                <th>Discount Type</th>
                                                <th>Discount</th>
                                                <th style={{width:'10%'}}>Tax</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tb}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">

                                </div>
                                <div className="col-5">
                                    <h5 className=" mt-3" style={{fontSize:'18px',marginLeft:'180px'}}>Subtotal</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'180px'}}>Tax</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'180px'}}>Discount</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'180px'}}>Total</h5>
                                </div>
                                <div className="col-3">
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px'}}>Rs {props.invoice.total_subtotal}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px'}}>Rs {props.invoice.total_tax}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px'}}>Rs {props.invoice.total_discount}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px'}}>Rs {props.invoice.total_amount}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
