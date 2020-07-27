import React from 'react'

export default function customersmall(props) {
    let content=props.customers.map((customer,index) => {
        return (
            <div key={index}>
                <div className="row">
                    <div className="col-7">
                        <h6 style={{color:'#25b0b9',fontSize:'17px',fontFamily:'Acme',marginLeft:'20px'}}>{customer.display_name}</h6>
                    </div>
                    <div className="col-5">
                        <h6 style={{fontFamily:'Acme',fontSize:'17px'}}>{customer.mobile}</h6>   
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
