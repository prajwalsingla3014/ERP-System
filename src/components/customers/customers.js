import React, { Component } from 'react';
import CustomerSmall from "../customers/customersmall";
import CustomerDetail from "../customers/customerdetail";
import CustomerTable from "../customers/customertable";
import "../invoice/invoicesmall";
import axios from 'axios';
export default class customers extends Component {
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/persons_manager/customer/?ordering=created_at")
            .then(res => {
                this.setState({customers:res.data})
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        const script=document.createElement("script");
        script.src="js/customertablesort.js";
        script.async=true;
        document.body.appendChild(script);
    }
    constructor(props)
    {
        super(props);
        this.state={
            active:false,
            customers:[
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
                }
            ],
            selectedId:'',
            detail:''
        }
    }
    cancel = (event) => 
    {
        console.log(this.state.active)
        this.setState({active:false,selectedId:'',product:''})
    }
    setIdHandler=(id)=>{
        let detailIndex=this.state.customers.findIndex(customer=>customer.id===id);
        let detail;
        if(detailIndex!==-1)
            {
              detail=this.state.customers[detailIndex];
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
                    {console.log(this.state.detail)}
                    <div className="row">
                        <div className={this.state.active ? 'none' : 'col-12'}>
                            <div className="card" style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontFamily:'Acme',fontSize:'18px'}}>Customers Details</h3>
                                </div>
                                <div className="card-body">
                                    <CustomerTable customers={this.state.customers} selectedIdHandler={this.setIdHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={this.state.active ? 'col-4' : 'none'}>
                            {this.state.selectedId ? <CustomerSmall customers={this.state.customers} selectedIdHandler={this.setIdHandler} /> : null}
                        </div>
                        <div className={this.state.active ? 'col-8' : 'none'}>
                            {this.state.selectedId ? <CustomerDetail customer={this.state.detail} cancelHandler={this.cancel} /> : null}
                        </div>
                    </div>
                </section>
            </div> 
        );
    }
}

