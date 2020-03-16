import React from 'react'

function Saletable(props) {
    let tb=props.sales.map((sale,index)=>{
        return(< tr key={index}>
            <td><button className="btn" onClick={()=>props.selectedIdhandler(sale.no)}  style={{fontSize:'15px',color:'#25b0b9',marginTop:'-5px'}}>{sale.no}</button></td>
            <td style={{fontSize:'15px'}}>{sale.date}</td>
            <td style={{fontSize:'15px'}}>{sale.name}</td>
            <td style={{fontSize:'15px'}}>{sale.invoicecount}</td>
            <td style={{fontSize:'15px'}}>{sale.amount}</td>
            <td style={{fontSize:'15px'}}>{sale.amountwt}</td>
        </tr>)
    })
    return (
        <table id="customerdetail" className="table table-bordered">
            <thead>
                <tr>
                    <th style={{fontSize:'16px'}}>No</th>
                    <th style={{fontSize:'16px'}}>Date</th>
                    <th style={{fontSize:'16px'}}>Name</th>
                    <th style={{fontSize:'16px'}}>Invoice Count</th>
                    <th style={{fontSize:'16px'}}>Sales</th>
                    <th style={{fontSize:'16px'}}>Sales with tax</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}

export default Saletable
