import React from 'react';
function Purchasetable(props) {
    let tb=props.purchases.map((purchase,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{(purchase.invoice_date).split('-').reverse().join('-')}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}> {purchase.invoice_no}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{purchase.supplier.display_name}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{(purchase.expected_delivery).split('-').reverse().join('-')}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{purchase.total_amount}</button></td>
        </tr>)
    })
    return (
        <table id="purchasedetail" className="table table-hover">
            <thead>
                <tr>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Date</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Purchase No</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Supplier Name</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Expected Delivery</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Amount</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}

export default Purchasetable
