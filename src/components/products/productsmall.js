import React from 'react'

export default function productsmall(props) {
    let content=props.products.map((product,index) => {
        return (
            <div key={index}>
                <section className="content">
                    <div className="row">
                        <div className="col-3">
                            <h6 style={{fontSize:'17px',fontFamily:'Acme'}}>No.{product.id}</h6>
                        </div>
                        <div className="col-9">
                            <h6 style={{color:'#25b0b9',fontFamily:'Acme',fontSize:'17px'}}>{product.name + " " + product.description}</h6>
                        </div>
                    </div>
                </section>
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
