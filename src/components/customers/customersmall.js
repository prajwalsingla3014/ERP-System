import React from 'react'

export default function customersmall(props) {
    let content=props.customers.map((customer,index) => {
        return (
            <div key={index}>
                <h6 style={{color:'#25b0b9',fontSize:'17px',fontFamily:'Acme'}}>{customer.display_name}</h6>
                <h6 style={{fontFamily:'Acme',fontSize:'17px'}}>{customer.mobile}</h6>   
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
