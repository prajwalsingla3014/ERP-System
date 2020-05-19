import React from 'react'
export default function purchasedetails(props) {
    let tb=(props.purchase.purchased_items).map((item,index) => {
        return ( <tr key={index}>
                <td>{item.id}</td>
                <td>{item.product.name + item.product.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.discount_type}</td>
                <td>{item.discount}</td>
                <td style={{width:'30%'}}>{item.tax.rate} %</td>
                <td>{item.sub_total}</td>
        </tr>)
    })
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
                                    <h6 className="ml-5">{props.purchase.invoice_no}</h6>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="mt-4 ml-3">Date Of Purchase</h5>
                                    <h6 className="ml-3">{(props.purchase.invoice_date).split('-').reverse().join('-')}</h6>
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
                                    <h5 className="mt-2 ml-3 font-weight-bolder">{props.purchase.supplier.display_name}</h5>
                                    <h6 className="ml-3">{props.purchase.supplier.payment_details.shipping_address.address}</h6>
                                    <h6 className="ml-3 mt-1">{props.purchase.supplier.payment_details.shipping_address.city}</h6>
                                    <h6 className="ml-3 ">{props.purchase.supplier.payment_details.shipping_address.zip_code}</h6>
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
                                                <th>Tax</th>
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
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>{props.purchase.total_subtotal}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>{props.purchase.total_tax}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>{props.purchase.total_discount}</h5>
                                    <hr style={{marginLeft:'-15px',width:'100%'}}></hr>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'-10px'}}>{props.purchase.total_amount}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </div>
    )
}
