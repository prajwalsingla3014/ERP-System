import React from 'react';
function Invoicetable(props) {
    let tb=props.invoices.map((invoice,index)=>{
        return(< tr key={index}>
            <td style={{fontSize:'15px'}}>{invoice.date}</td>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(invoice.no)}  style={{fontSize:'15px',color:'#25b0b9',marginTop:'-5px'}}> {invoice.no}</button></td>
            <td style={{fontSize:'15px'}}>{invoice.orderno}</td>
            <td style={{fontSize:'15px'}}>{invoice.name}</td>
            <td style={{fontSize:'15px'}}>{invoice.duedate}</td>
            <td style={{fontSize:'15px'}}>{invoice.amount}</td>
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
