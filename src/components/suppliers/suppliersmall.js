import React from 'react'

function Suppliersmall(props) {
    let content=props.suppliers.map((supplier,index) => {
        return (
            <div key={index}>
                <h6 style={{color:'#25b0b9'}}>{supplier.display_name}</h6>
                <h6>Rs {supplier.total_amount}</h6>   
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

export default Suppliersmall
