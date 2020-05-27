import React from 'react'

function Suppliersmall(props) {
    let content=props.suppliers.map((supplier,index) => {
        return (
            <div key={index}>
                <h6 style={{color:'#25b0b9',fontSize:'17px',fontFamily:'Acme'}}>{supplier.display_name}</h6>
                <h6 style={{fontFamily:'Acme',fontSize:'17px'}}>{supplier.mobile}</h6>   
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
