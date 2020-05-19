import React from 'react'
function Customertable(props) {
    let tb=props.customers.map((customer,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%',marginLeft:'-12px'}}> {customer.id}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.display_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.company_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.email}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.payment_details.shipping_address.city}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.mobile}</button></td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th style={{width:'20%'}}>Name</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}

export default Customertable
