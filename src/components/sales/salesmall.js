import React from 'react'

export default function salesmall(props) {
    let content=props.sales.map((sale,index) => {
        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <h6 style={{color:'#25b0b9'}}>{sale.name}</h6>
                        <h6>{sale.amountwt}</h6>
                    </div>
                </div>
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
