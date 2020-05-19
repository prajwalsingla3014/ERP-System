import React from 'react'

export default function invoicesmall(props) {
    let content=props.invoices.map((invoice,index) => {
        return (
            <div key={index}>
                <section className="content">
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontSize:'15px'}}>{invoice.customer.display_name}</h6>
                        </div>
                        <div className="col-6" style={{marginLeft:'0px'}}>
                            <h6>Rs {invoice.total_amount}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mt-2">
                            <h6 ><button className="btn" onClick={() => props.selectedIdHandler(invoice.id)} style={{color:'#25b0b9',fontSize:'15px',marginTop:'-10px'}}>{invoice.invoice_no}</button></h6>
                        </div>
                        <div className="col-4 mt-2">
                            <h6 style={{fontSize:'15px'}}>{(invoice.invoice_date).split("-").reverse().join("-")}</h6>
                        </div>
                        <div className="col-4 mt-2">
                            <h6 style={{fontSize:'15px'}}>{invoice.order_no}</h6>
                        </div>
                    </div>
                </section>
                <hr />
            </div>
        )
    })
    return (
        <div className="card">
            <div className="card-body">
                {content}
            </div>
        </div>
    )
}

