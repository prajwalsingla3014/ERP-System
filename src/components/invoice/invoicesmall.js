import React from 'react'

export default function invoicesmall(props) {
    let content=props.invoices.map((invoice,index) => {
        return (
            <div key={index}>
                <section className="content">
                    <div className="row">
                        <div className="col-5">
                            <h6 style={{fontSize:'15px'}}>{invoice.name}</h6>
                        </div>
                        <div className="col-4" style={{marginLeft:'80px'}}>
                            <h6>Rs {invoice.amount}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mt-2">
                            <h6 ><button className="btn" onClick={() => props.selectedIdHandler(invoice.no)} style={{color:'#25b0b9',fontSize:'15px',marginTop:'-10px'}}>{invoice.no}</button></h6>
                        </div>
                        <div className="col-4 mt-2">
                            <h6 style={{fontSize:'15px'}}>{invoice.date}</h6>
                        </div>
                        <div className="col-4 mt-2">
                            <h6 style={{fontSize:'15px'}}>{invoice.orderno}</h6>
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

