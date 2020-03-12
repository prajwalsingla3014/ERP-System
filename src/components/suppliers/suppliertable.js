import React from 'react'

function Suppliertable(props) {
    let tb=props.suppliers.map((supplier,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(supplier.no)}  style={{fontSize:'15px',color:'#25b0b9',marginTop:'-5px'}}> {supplier.no}</button></td>
            <td style={{fontSize:'15px'}}>{supplier.name}</td>
            <td style={{fontSize:'15px'}}>{supplier.email}</td>
            <td style={{fontSize:'15px'}}>{supplier.city}</td>
            <td style={{fontSize:'15px'}}>{supplier.product}</td>
            <td style={{fontSize:'15px'}}>{supplier.amount}</td>
            <td style={{fontSize:'15px'}}>{supplier.contact}</td>
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
