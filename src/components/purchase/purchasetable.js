import React from 'react';
function Purchasetable(props) {
    let tb=props.purchases.map((purchase,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{purchase.date}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}> {purchase.no}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{purchase.name}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(purchase.no)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{purchase.amount}</button></td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-bordered">
            <thead>
                <tr>
                    <th  style={{fontSize:'16px'}}>Date</th>
                    <th  style={{fontSize:'16px'}}>Purchase No</th>
                    <th  style={{fontSize:'16px'}}>Supplier Name</th>
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
