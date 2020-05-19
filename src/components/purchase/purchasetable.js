import React from 'react';
function Purchasetable(props) {
    let tb=props.purchases.map((purchase,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{(purchase.invoice_date).split('-').reverse().join('-')}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}> {purchase.invoice_no}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{purchase.supplier.display_name}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{(purchase.expected_delivery).split('-').reverse().join('-')}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{purchase.total_amount}</button></td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-bordered">
            <thead>
                <tr>
                    <th  style={{fontSize:'16px'}}>Date</th>
                    <th  style={{fontSize:'16px'}}>Purchase No</th>
                    <th  style={{fontSize:'16px'}}>Supplier Name</th>
                    <th  style={{fontSize:'16px'}}>Expected Delivery</th>
                    <th  style={{fontSize:'16px'}}>Amount</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}

export default Purchasetable
