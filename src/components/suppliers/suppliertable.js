import React from 'react'

function Suppliertable(props) {
    let tb=props.suppliers.map((supplier,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',marginTop:'-5px'}}> {supplier.no}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',marginTop:'-5px'}}>{supplier.name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',marginTop:'-5px'}}>{supplier.email}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',marginTop:'-5px'}}>{supplier.city}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',marginTop:'-5px'}}>{supplier.product}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',marginTop:'-5px'}}>{supplier.amount}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',marginTop:'-5px'}}>{supplier.contact}</button></td>
        </tr>)
    })
    return (
        <table className="table table-bordered" id="customerdetail">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Products</th>
                    <th>Amount</th>
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
