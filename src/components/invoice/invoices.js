import React, { PureComponent } from 'react';
import InvoiceTable from "../invoice/invoicetable";
import InvoiceDetails from "../invoice/invoicedetails";
import InvoiceSmall from "../invoice/invoicesmall";
import "./invoicenone.css"
import axios from 'axios';
class Invoice extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state={
            active:false,
            invoices:[{
                id:' ',
                customer:{
                    id:' ',
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
                        }
                    }
                },
                invoice_no:' ',
                order_no:' ',
                invoice_date:' ',
                payment_terms:' ',
                due_date:' ',
                sold_items:[{
                    id:' ',
                    product:[{
                        name:' ',
                        description:' '
                    }],
                    quantity:' ',
                    price:' ',
                    discount:' ',
                    discount_type:' ',
                    tax:' ',
                    sub_total:' '
                }],
                total_subtotal:' ',
                total_tax:' ',
                total_discount:' ',
                total_amount:' ',
                notes:' ',
                terms_and_conditions:' '
            }],
            selectedId:'',
            product:''
        }
    }
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/invoice/sale_invoice/?ordering=created_at")
            .then(res => {
                this.setState({invoices:res.data})
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
    cancel = (event) => 
    {

        this.setState({active:false,selectedId:'',product:''})
    }
    setIdHandler=(id)=>{
        let productIndex=this.state.invoices.findIndex(invoice=>invoice.id===id);
        let product;
        if(productIndex!==-1)
        {
              product=this.state.invoices[productIndex];
              console.log(product)
              this.setState({selectedId:id,product,active:true});
        }
        else
        {
           this.setState({selectedId:'',product:'',active:false});
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
                                    <h3 className="card-title" style={{fontFamily:'Acme',fontSize:'18px'}}>All Invoices</h3>
                                </div>
                                <div className="card-body">
                                    <InvoiceTable  invoices={this.state.invoices}  selectedIdhandler={this.setIdHandler} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={this.state.active ? 'col-4' : 'none' }>
                            {this.state.selectedId ? <InvoiceSmall invoices={this.state.invoices} selectedIdhandler={this.setIdHandler} /> : null }
                        </div>
                        <div className={this.state.active ? 'col-8' : 'none'}>
                            {this.state.selectedId ? <InvoiceDetails invoice={this.state.product} cancelHandler={this.cancel} /> : null}
                        </div> 
                    </div>
                </section>
            </div>
        )
    }
}

export default Invoice