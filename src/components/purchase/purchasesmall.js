import React from 'react'
export default function purchasesmall(props) {
    let content=props.purchases.map((purchase,index) => {
        return (
            <div key={index}>
                <section className="content">
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontSize:'17px',fontFamily:'Acme'}}>{purchase.supplier.display_name}</h6>
                        </div>
                        <div className="col-6" style={{marginLeft:'0px'}}>
                            <h6 style={{fontSize:'17px',fontFamily:'Acme'}}>Rs {purchase.total_amount}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mt-2">
                            <h6 ><button className="btn" onClick={() => props.selectedIdHandler(purchase.no)} style={{color:'#25b0b9',fontSize:'17px',marginTop:'-10px',fontFamily:'Acme'}}>{purchase.invoice_no}</button></h6>
                        </div>
                        <div className="col-4 mt-2">
                            <h6 style={{fontSize:'17px',fontFamily:'Acme'}}>{(purchase.invoice_date).split('-').reverse().join('-')}</h6>
                        </div>
                        <div className="col-4 mt-2">
                            <h6 style={{fontSize:'17px',fontFamily:'Acme'}}>{(purchase.expected_delivery).split('-').reverse().join('-')}</h6>
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

