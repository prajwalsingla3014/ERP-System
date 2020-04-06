import React from 'react'

export default function productsmall(props) {
    let content=props.products.map((product,index) => {
        return (
            <div key={index}>
                <section className="content">
                    <div className="row">
                        <div className="col-3">
                            <h6>No.{product.id}</h6>
                        </div>
                        <div className="col-7">
                            <h6 style={{color:'#25b0b9'}}>{product.name}</h6>
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
