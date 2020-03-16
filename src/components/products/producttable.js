import React from 'react'
function Producttable(props) {
    let tb=props.products.map((product,index) => {
        return ( <tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.no)} style={{fontSize:'16px',color:'#25b0b9',marginTop:'-5px'}}> {product.no}</button></td>
            <td style={{fontSize:'16px'}}>{product.name}</td>
            <td style={{fontSize:'16px'}}>{product.description}</td>
            <td style={{fontSize:'16px'}}>{product.unit}</td>
            <td style={{fontSize:'16px'}}>{product.id}</td>
            <td style={{fontSize:'16px'}}>{product.quantity}</td>
            <td style={{fontSize:'16px'}}>{product.amount}</td>
        </tr>)
    })
    return (
        <table className="table table-bordered" id="customerdetail">
                <thead>
                    <tr>
                        <th style={{fontSize:'15px'}}>No</th>
                        <th style={{fontSize:'15px'}}>Name</th>
                        <th style={{fontSize:'15px'}}>Description</th>
                        <th style={{fontSize:'15px'}}>Unit</th>
                        <th style={{fontSize:'15px'}}>ID</th>
                        <th style={{fontSize:'15px'}}>Quantity</th>
                        <th style={{fontSize:'15px'}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {tb}
                </tbody>
            </table>
        )
    }

export default Producttable
