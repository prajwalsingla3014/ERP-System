import React from 'react'

export default function customersmall(props) {
    let content=props.customers.map((customer,index) => {
        return (
            <div key={index}>
                <h6 style={{color:'#25b0b9'}}>{customer.display_name}</h6>
                <h6>Rs {customer.total_amount}</h6>   
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
