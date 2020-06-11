import React, { Component } from 'react'
import SupplierTable from "../suppliers/suppliertable";
import SupplierSmall from "../suppliers/suppliersmall";
import SupplierDetail from "../suppliers/supplierdetail";
import "../invoice/invoicesmall";
import axios from 'axios'
export default class suppliers extends Component {
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/persons_manager/supplier/?ordering=created_at")
            .then(res => {
                this.setState({suppliers:res.data})
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        const script=document.createElement("script");
        script.src="js/suppliertablesort.js";
        script.async=true;
        document.body.appendChild(script);
    }
    constructor(props)
    {
        super(props);
        this.state={
            active:false,
            suppliers:[
                {
                    id:' ',
                    salutation:' ',
                    first_name:' ',
                    last_name:' ',
                    display_name:' ',
                    email:' ',
                    mobile:' ',
                    total_amount:' ',
                    product:' ',
                    payment_details:{
                        shipping_address:{
                            address:' ',
                            city:' ',
                            state:' ',
                            country:' ',
                            zip_code:' '
                        },
                        billing_address:{
                            address:' ',
                            city:' ',
                            state:' ',
                            country:' ',
                            zip_code:' '
                        },
                        gst_treatment:' ',
                        payment_terms:' '
                    }
                }],
            selectedId:'',
            detail:''
        }
    }
    cancel = (event) => 
    {
        this.setState({active:false,selectedId:'',product:''})
    }
    setIdHandler=(id)=>{
        let detailIndex=this.state.suppliers.findIndex(supplier=>supplier.id===id);
        let detail;
        if(detailIndex!==-1)
            {
              detail=this.state.suppliers[detailIndex];
              this.setState({selectedId:id,detail,active:true});
             }
        else
       {
           this.setState({selectedId:'',detail:'',active:false});
       }
        
      }
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className={this.state.active ? 'none' : 'col-12'}>
                            <div className="card" style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                                <div className="card-header">
                                    <h3 className="card-title"  style={{fontFamily:'Acme',fontSize:'18px'}}>Suppliers Details</h3>
                                </div>
                                <div className="card-body">
                                    <SupplierTable suppliers={this.state.suppliers} selectedIdHandler={this.setIdHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={this.state.active ? 'col-3' : 'none'}>
                            {this.state.selectedId ? <SupplierSmall suppliers={this.state.suppliers} selectedIdHandler={this.setIdHandler} /> : null}
                        </div>
                        <div className={this.state.active ? 'col-9' : 'none'}>
                            {this.state.selectedId ? <SupplierDetail supplier={this.state.detail} cancelHandler={this.cancel} /> : null}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
