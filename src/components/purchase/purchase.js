import React, { PureComponent } from 'react';
import PurchaseTable from "../purchase/purchasetable";
import PurchaseDetails from "../purchase/purchasedetails";
import PurchaseSmall from "../purchase/purchasesmall";
import "../invoice/invoicenone.css";
class Purchase extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state={
            active:false,
            purchases:[{ date:'02/02/2020',no:'00001',name:'Mr Suresh Goel',amount:'177120'},
                      { date:'04/02/2020',no:'00002',name:'Mr Rohit Bansal',amount:'60000'}],
                    selectedId:'',
                    product:''
        }
    }
    cancel = (event) => 
    {

        this.setState({active:false,selectedId:'',product:''})
    }
    setIdHandler=(no)=>{
        let productIndex=this.state.purchases.findIndex(purchase=>purchase.no===no);
        let product;
        if(productIndex!==-1)
        {
              product=this.state.purchases[productIndex];
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
                            {this.state.selectedId ? <PurchaseDetails purchase={this.state.product} cancelHandler={this.cancel} /> : null}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Purchase