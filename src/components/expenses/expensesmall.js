import React from 'react'

export default function expensesmall(props) {
    let content=props.expenses.map((expense,index) => {
        return (
            <div key={index}>
                <section className="content">
                    <div className="row">
                        <div className="col-4">
                            <h6 style={{fontSize:'17px',fontFamily:'Acme'}}>{(expense.date).split("-").reverse().join("-")}</h6>
                        </div>
                        <div className="col-8">
                            <h6 style={{color:'#25b0b9',fontFamily:'Acme',fontSize:'17px'}}>{expense.category.name}</h6>
                        </div>
                    </div>
                </section>
            </div>
        )
    })
    return (
        <div className="card">
            <div className="card-body">
                {content}
            </div>
        </div>
    )
}
