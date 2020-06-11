import React from 'react'
export default function purchasedetails(props) {
    let tb=(props.purchase.purchased_items).map((item,index) => {
        return ( <tr key={index}>
                <td style={{fontFamily:'Acme',fontSize:'15px'}}>{item.product.name + " " + item.product.description}</td>
                <td style={{fontFamily:'Acme',fontSize:'15px'}}>{item.quantity}</td>
                <td style={{fontFamily:'Acme',fontSize:'15px'}}>{item.price}</td>
                <td style={{fontFamily:'Acme',fontSize:'15px',width:'70%'}}>{item.discount_type}</td>
                <td style={{fontFamily:'Acme',fontSize:'15px'}}>{item.discount}</td>
                <td style={{fontFamily:'Acme',fontSize:'15px'}}>{item.tax.rate} %</td>
                <td style={{fontFamily:'Acme',fontSize:'15px'}}>{item.sub_total}</td>
        </tr>)
    })
    return (
        <div>
            <section className="content">
                <div className="invoice p-3 mb-3" id="invoice1">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title" style={{fontSize:'25px',fontFamily:'Acme',marginLeft:'250px'}}>{props.employee[0].industry_details.name}</h3>
                            <h4 className="card-title" style={{fontSize:'22px',fontFamily:'Acme',marginTop:'30px',marginLeft:'-125px'}}>{props.employee[0].display_name}</h4>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={props.cancelHandler}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row invoice-info">
                                <div className="col-sm-5">
                                    <h5 className="mt-4 ml-5" style={{fontFamily:'Acme',fontSize:'20px'}}>Purchase No</h5>
                                    <h6 className="ml-5" style={{fontFamily:'Acme',fontSize:'20px'}}>{props.purchase.invoice_no}</h6>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="mt-4 ml-3" style={{fontFamily:'Acme',fontSize:'20px'}}>Date Of Purchase</h5>
                                    <h6 className="ml-3" style={{fontFamily:'Acme',fontSize:'20px'}}>{(props.purchase.invoice_date).split('-').reverse().join('-')}</h6>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-5">
                                    <h5 className="mt-2 ml-5 font-weight-bolder" style={{fontFamily:'Acme',fontSize:'20px'}}>Delivered By</h5>
                                    <h6 className="ml-5" style={{fontFamily:'Acme',fontSize:'20px'}}>Address</h6>
                                    <h6 className="ml-5 mt-2" style={{fontFamily:'Acme',fontSize:'20px'}}>City</h6>
                                    <h6 className="ml-5" style={{fontFamily:'Acme',fontSize:'20px'}}>Pincode</h6>
                                    <h6 className="ml-5" style={{fontFamily:'Acme',fontSize:'20px'}}>State</h6>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="mt-2 ml-3 font-weight-bolder"  style={{fontFamily:'Acme',fontSize:'20px'}}>{props.purchase.supplier.display_name}</h5>
                                    <h6 className="ml-3" style={{fontFamily:'Acme',fontSize:'20px'}}>{props.purchase.supplier.payment_details.billing_address.address}</h6>
                                    <h6 className="ml-3 mt-1"  style={{fontFamily:'Acme',fontSize:'20px'}}>{props.purchase.supplier.payment_details.billing_address.city}</h6>
                                    <h6 className="ml-3 "  style={{fontFamily:'Acme',fontSize:'20px'}}>{props.purchase.supplier.payment_details.billing_address.zip_code}</h6>
                                    <h6 className="ml-3 " style={{fontFamily:'Acme',fontSize:'20px'}}>{props.purchase.supplier.payment_details.billing_address.state.name}</h6>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    <table className="table  mt-1">
                                        <thead>
                                            <tr>
                                                <th style={{fontFamily:'Acme',fontSize:'15px'}}>Product</th>
                                                <th style={{fontFamily:'Acme',fontSize:'15px'}}>Quanity</th>
                                                <th style={{fontFamily:'Acme',fontSize:'15px'}}>Price/Quantity</th>
                                                <th style={{fontFamily:'Acme',fontSize:'15px'}}>Disc Type</th>
                                                <th style={{fontFamily:'Acme',fontSize:'15px'}}>Discount</th>
                                                <th style={{fontFamily:'Acme',fontSize:'15px',width:'200%'}}>Tax</th>
                                                <th style={{fontFamily:'Acme',fontSize:'15px'}}>Amount</th>
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
                                    <h5 className=" mt-3" style={{fontSize:'18px',marginLeft:'180px',fontFamily:'Acme'}}>Subtotal</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'180px',fontFamily:'Acme'}}>Tax</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'180px',fontFamily:'Acme'}}>Discount</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'180px',fontFamily:'Acme'}}>Total</h5>
                                </div>
                                <div className="col-4">
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px',fontFamily:'Acme'}}>Rs {props.purchase.total_subtotal}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px',fontFamily:'Acme'}}>Rs {props.purchase.total_tax}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px',fontFamily:'Acme'}}>Rs {props.purchase.total_discount}</h5>
                                    <h5 className="mt-3" style={{fontSize:'18px',marginLeft:'40px',fontFamily:'Acme'}}>Rs {props.purchase.total_amount}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </div>
    )
}
