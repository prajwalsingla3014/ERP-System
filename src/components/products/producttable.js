import React from 'react'
function Producttable(props) {
    let tb=props.products.map((product,index) => {
        return ( <tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}> {product.id}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{product.name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{product.description}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{product.unit}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{product.hsn_code}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{product.quantity_total}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(product.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{product.selling_price}</button></td>
        </tr>)
    })
    return (
        <table className="table table-hover" id="productdetail">
                <thead>
                    <tr>
                        <th style={{fontSize:'16px',fontFamily:'Acme'}}>No</th>
                        <th style={{fontSize:'16px',fontFamily:'Acme'}}>Name</th>
                        <th style={{fontSize:'16px',fontFamily:'Acme'}}>Description</th>
                        <th style={{fontSize:'16px',fontFamily:'Acme'}}>Unit</th>
                        <th style={{fontSize:'16px',fontFamily:'Acme'}}>HSN_Code</th>
                        <th style={{fontSize:'16px',fontFamily:'Acme'}}>Quantity</th>
                        <th style={{fontSize:'16px',fontFamily:'Acme'}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {tb}
                </tbody>
            </table>
        )
    }

export default Producttable
