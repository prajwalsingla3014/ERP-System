import React from 'react'
import InvoiceDetails from "../invoice/invoicedetails";
import InvoiceSmall from "../invoice/invoicesmall";
import "./invoicenone.css"
function Invoiceindividual(props) {
    return (
        <section className="content">
            <div className="row">
                <div className={props.active ? 'col-4' : 'none'}>
                    <InvoiceSmall invoice={props.invoice} selectedIdhandler={props.setIdHandler}/>
                </div>
                <div className={props.active ? 'col-8' : 'none'}>
                    <InvoiceDetails invoice={props.invoice} cancelHandler={props.cancelHandler}/>
                </div>
            </div>
        </section>
    )
}

export default Invoiceindividual
