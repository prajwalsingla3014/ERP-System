import React from 'react'
function Expensetable(props) {
    let tb=props.expenses.map((expense,index) => {
        return ( <tr key={index}>
            <td><button className="btn" onClick={() => props.selectedIdHandler(expense.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}> {expense.id}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(expense.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}> {(expense.date).split("-").reverse().join("-")}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(expense.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{expense.customer.display_name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(expense.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{expense.category.name}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(expense.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{expense.expense_type}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(expense.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{expense.hsn_code}</button></td>
            <td><button className="btn" onClick={() => props.selectedIdHandler(expense.id)} style={{fontSize:'16px',marginTop:'-5px',width:'100%',fontFamily:'Acme'}}>{expense.amount}</button></td>
        </tr>)
    })
    return (
        <table className="table table-hover" id="expensedetail">
            <thead>
                <tr>
                    <th style={{fontSize:'16px',fontFamily:'Acme'}}>No</th>
                    <th style={{fontSize:'16px',fontFamily:'Acme'}}>Date</th>
                    <th style={{fontSize:'16px',fontFamily:'Acme'}}>Customer Name</th>
                    <th style={{fontSize:'16px',fontFamily:'Acme'}}>Category</th>
                    <th style={{fontSize:'16px',fontFamily:'Acme'}}>Type</th>
                    <th style={{fontSize:'16px',fontFamily:'Acme'}}>HSN_Code</th>
                    <th style={{fontSize:'16px',fontFamily:'Acme'}}>Amount</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
    )
}
export default Expensetable;