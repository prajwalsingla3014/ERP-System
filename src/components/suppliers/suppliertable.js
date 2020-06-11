import React from 'react'

function Suppliertable(props) {
    let tb=props.suppliers.map((supplier,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',marginLeft:'-12px',fontFamily:'Acme'}}> {supplier.id}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{supplier.display_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{supplier.company_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{supplier.email}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{supplier.payment_details.billing_address.city}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{supplier.mobile}</button></td>
        </tr>)
    })
    return (
        <table className="table table-hover" id="supplierdetail">
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

export default Suppliertable
