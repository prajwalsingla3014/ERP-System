import React from 'react'
import CustomerSmall from "../customers/customersmall";
import CustomerDetail from "../customers/customerdetail";
import "../invoice/invoicenone.css"
function Customerindividual(props) {
    return (
        <section className="content">
            <div className="row">
                <div className={props.active ? 'col-2' : 'none'}>
                    <CustomerSmall customer={props.customer} selectedIdHandler={props.setIdHandler} />
                </div>
                <div className={props.active ? 'col-10' : 'none'}>
                    <CustomerDetail customer={props.customer} cancelHandler={props.cancelHandler}/>
                </div>
            </div>
        </section>
    )
}

export default Customerindividual
