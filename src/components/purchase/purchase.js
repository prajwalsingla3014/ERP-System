import React, { PureComponent } from 'react';
import PurchaseTable from "../purchase/purchasetable";
import PurchaseDetails from "../purchase/purchasedetails";
import PurchaseSmall from "../purchase/purchasesmall";
import "../invoice/invoicenone.css";
import axios from 'axios';
class Purchase extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state={
            active:false,
            purchases:[{
                id:' ',
                supplier:{
                    id:' ',
                    payment_details:{
                        shipping_address:{
                            address:' ',
                            city:' ',
                            state:' ',
                            zip_code:' ',
                            country:' '
                        },
                        billing_address:{
                            address:' ',
                            city:' ',
                            state:' ',
                            zip_code:' ',
                            country:' '
                        }
                    }
                },
                invoice_no:' ',
                invoice_date:' ',
                payment_terms:' ',
                expected_delivery:' ',
                notes:' ',
                terms_and_conditions:' ',
                total_subtotal:' ',
                total_tax:' ',
                total_discount:' ',
                total_amount:' ',
                purchased_items:[{
                    id:' ',
                    price:' ',
                    quantity:' ',
                    discount:' ',
                    discount_type:' ',
                    sub_total:' ',
                    tax:' ',
                    product:[{
                        name:' ',
                        description:' '
                    }]
                }]
            }],
            employee:{
                first_name:' ',
                display_name:' ',
                payment_details:{
                    billing_address:{

                    }
                }
            },
                    selectedId:'',
                    product:''
        }
    }
    cancel = (event) => 
    {

        this.setState({active:false,selectedId:'',product:''})
    }
    setIdHandler=(id)=>{
        let productIndex=this.state.purchases.findIndex(purchase=>purchase.id===id);
        let product;
        if(productIndex!==-1)
        {
              product=this.state.purchases[productIndex];
              this.setState({selectedId:id,product,active:true});
        }
        else
        {
           this.setState({selectedId:'',product:'',active:false});
        }  
      }
      async componentDidMount()
      {
          await axios.get("https://farzi-erp.herokuapp.com/invoice/purchase_invoice/?ordering=created_at")
            .then(res => {
                this.setState({
                    purchases:res.data
                })
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        await axios.get("https://farzi-erp.herokuapp.com/persons_manager/employee/")
            .then(res => {
                this.setState({employee:res.data})
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
          const script=document.createElement("script");
          script.src="js/purchasetablesort.js";
          script.async=true;
          document.body.appendChild(script);
      }
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className={this.state.active ? 'none' : 'col-12'}>
                            <div className="card" style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontFamily:'Acme',fontSize:'18px'}}>All Purchases</h3>
                                </div>
                                <div className="card-body">
                                    <PurchaseTable  purchases={this.state.purchases}  selectedIdhandler={this.setIdHandler} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={this.state.active ? 'col-4' : 'none' }>
                            {this.state.selectedId ? <PurchaseSmall purchases={this.state.purchases} selectedIdhandler={this.setIdHandler} /> : null }
                        </div>
                        <div className={this.state.active ? 'col-8' : 'none'}>
                            {this.state.selectedId ? <PurchaseDetails purchase={this.state.product} employee={this.state.employee} cancelHandler={this.cancel} /> : null}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Purchase