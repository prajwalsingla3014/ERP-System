import React from 'react'
import ProductsDetail from "../products/productsdetail";
import ProductSmall from "../products/productsmall";
import "../invoice/invoicenone.css"
function Productindividual(props) {
    return (
        <section className="content">
            <div className="row">
                <div className={props.active ? 'col-3' : 'none'}>
                    <ProductSmall product={props.product} selectedIdHandler={props.setIdHandler}/>
                </div>
                <div className={props.active ? 'col-9' : 'none'}>
                    <ProductsDetail product={props.product} cancelHandler={props.cancelHandler}/>
                </div>
            </div>
        </section>
    )
}

export default Productindividual
