import React from 'react'
function Customertable(props) {
    let tb=props.customers.map((customer,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}> {customer.no}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.email}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.city}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.product}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.amount}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{customer.contact}</button></td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-bordered">
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

export default Customertable
