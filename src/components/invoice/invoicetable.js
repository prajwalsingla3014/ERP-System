import React from 'react';
function Invoicetable(props) {
    let tb=props.invoices.map((invoice,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{(invoice.invoice_date).split("-").reverse().join("-")}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}> {invoice.invoice_no}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{invoice.order_no}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{invoice.customer.display_name}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{(invoice.due_date).split("-").reverse().join("-")}</button></td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.id)}  style={{fontSize:'15px',marginTop:'-5px',width:'100%'}}>{invoice.total_amount}</button></td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-bordered">
            <thead>
                <tr>
                    <th  style={{fontSize:'16px'}}>Date</th>
                    <th  style={{fontSize:'16px'}}>Invoice No</th>
                    <th  style={{fontSize:'16px'}}>Order No</th>
                    <th  style={{fontSize:'16px'}}>Customer Name</th>
                    <th  style={{fontSize:'16px'}}>Due Date</th>
                    <th  style={{fontSize:'16px'}}>Amount</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}

export default Invoicetable
