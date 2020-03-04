import React from 'react'
function Customertable(props) {
    let tb=props.customers.map((customer,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(customer.no)}  style={{fontSize:'15px',color:'#25b0b9',marginTop:'-5px'}}> {customer.no}</button></td>
            <td style={{fontSize:'15px'}}>{customer.name}</td>
            <td style={{fontSize:'15px'}}>{customer.email}</td>
            <td style={{fontSize:'15px'}}>{customer.city}</td>
            <td style={{fontSize:'15px'}}>{customer.product}</td>
            <td style={{fontSize:'15px'}}>{customer.amount}</td>
            <td style={{fontSize:'15px'}}>{customer.contact}</td>
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
