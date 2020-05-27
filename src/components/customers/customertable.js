import React from 'react'
function Customertable(props) {
    let tb=props.customers.map((customer,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',marginLeft:'-12px',fontFamily:'Acme'}}> {customer.id}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{customer.display_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{customer.company_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{customer.email}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{customer.payment_details.shipping_address.city}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{customer.mobile}</button></td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-hover">
            <thead>
                <tr>
                    <th style={{fontFamily:'Acme',fontSize:'16px'}}>No</th>
                    <th style={{width:'20%',fontFamily:'Acme',fontSize:'16px'}}>Name</th>
                    <th style={{fontFamily:'Acme',fontSize:'16px'}}>Company Name</th>
                    <th style={{fontFamily:'Acme',fontSize:'16px'}}>Email</th>
                    <th style={{fontFamily:'Acme',fontSize:'16px'}}>City</th>
                    <th style={{fontFamily:'Acme',fontSize:'16px'}}>Contact</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}

export default Customertable
