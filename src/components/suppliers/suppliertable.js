import React from 'react'

function Suppliertable(props) {
    let tb=props.suppliers.map((supplier,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%',marginLeft:'-12px'}}> {supplier.id}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{supplier.display_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{supplier.company_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{supplier.email}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{supplier.payment_details.billing_address.city}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{supplier.mobile}</button></td>
        </tr>)
    })
    return (
        <table className="table table-bordered" id="customerdetail">
            <thead>
                <tr>
                    <th>id</th>
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

export default Suppliertable
