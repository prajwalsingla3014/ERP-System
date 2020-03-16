import React, { PureComponent } from 'react';
import InvoiceTable from "../invoice/invoicetable";
import InvoiceDetails from "../invoice/invoicedetails";
import InvoiceSmall from "../invoice/invoicesmall";
import InvoiceCreate from "../invoice/invoicecreate";
import "./invoicenone.css"
class Invoice extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state={
            active:false,
            invoices:[{ date:'02/02/2020',no:'00001',orderno:'78549',name:'Mr Suresh Goel',duedate:'15/02/2020',amount:'177120'},
                      { date:'04/02/2020',no:'00002',orderno:'78550',name:'Mr Rohit Bansal',duedate:'16/02/2020',amount:'60000'}],
                    selectedId:'',
                    product:''
        }
    }
    cancel = (event) => 
    {

        this.setState({active:false,selectedId:'',product:''})
    }
    setIdHandler=(no)=>{
        let productIndex=this.state.invoices.findIndex(invoice=>invoice.no===no);
        let product;
        if(productIndex!==-1)
        {
              product=this.state.invoices[productIndex];
              this.setState({selectedId:no,product,active:true});
        }
        else
        {
           this.setState({selectedId:'',product:'',active:false});
        }  
      }
      componentDidMount()
      {
          const script=document.createElement("script");
          script.src="js/customertablesort.js";
          script.async=true;
          document.body.appendChild(script);
      }
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className={this.state.active ? 'none' : 'col-12'}>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">All Invoices</h3>
                                </div>
                                <div className="card-body">
                                    <InvoiceTable  invoices={this.state.invoices}  selectedIdhandler={this.setIdHandler} /> 
                                </div>
                            </div>
                        </div>
                        <div className="none">
                            <InvoiceCreate value={this.state.invoices.length} />    
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