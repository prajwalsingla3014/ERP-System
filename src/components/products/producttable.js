import React from 'react'
function Producttable(props) {
    let tb=props.products.map((product,index) => {
        return ( <tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%'}}> {product.id}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%'}}>{product.name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%'}}>{product.description}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%'}}>{product.unit}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%'}}>{product.hsn_code}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%'}}>{product.quantity_total}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%'}}>{product.selling_price}</button></td>
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
                        <th style={{fontSize:'15px'}}>HSN_Code</th>
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
