import React from 'react'
import SaleSmall from "../sales/salesmall";
import SalesPerson from "../sales/salesperson";
function Saleindividual(props) {
    return (
        <section className="content">
            <div className="row">
                <div className={props.active ? 'col-2' : 'none'}>
                    <SaleSmall sale={props.sale} selectedIdhandler={props.setIdHandler}/>
                </div>
                <div className={props.active ? 'col-10' : 'none'}>
                    <SalesPerson sale={props.sale} cancelHandler={props.cancelHandler} />
                </div>
            </div>
        </section>
    )
}

export default Saleindividual
