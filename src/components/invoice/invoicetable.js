import React from 'react';
function Invoicetable(props) {
    let tb=props.invoices.map((invoice,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{(invoice.invoice_date).split("-").reverse().join("-")}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}> {invoice.invoice_no}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{invoice.order_no}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{invoice.customer.display_name}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{(invoice.due_date).split("-").reverse().join("-")}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{invoice.total_amount}</button></td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-bordered">
            <thead>
                <tr>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Date</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Invoice No</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Order No</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Customer Name</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Due Date</th>
                    <th  style={{fontSize:'16px',fontFamily:'Acme'}}>Amount</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}

export default Invoicetable
