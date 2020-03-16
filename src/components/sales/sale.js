import React, { PureComponent, useDebugValue } from 'react'
import SaleTable from "../sales/saletable";
import SaleSmall from "../sales/salesmall";
import SalesPerson from "../sales/salesperson";
import "../invoice/invoicesmall";
class sale extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active:false,
            sales:[{no:'1',date:'02/02/2020',name:'Suresh Goel',invoicecount:'1',amount:'50000',amountwt:'52000',email:'xyz@gmail.com',contact:'9899234103'},
                   {no:'2',date:'04/02/2020',name:'Rohit Bansal',invoicecount:'2',amount:'60000',amountwt:'65000',email:'xywz@gmail.com',contact:'9879230103'}],
            selectedId:'',
            item:''
        }
    }
    cancel = (event) => 
    {
        console.log(this.state.active)
        this.setState({active:false,selectedId:'',item:''})
    }
    setIdHandler=(no)=>{
        let saleIndex=this.state.sales.findIndex(sale=>sale.no===no);
        let item;
        if(saleIndex!==-1)
            {
              item=this.state.sales[saleIndex];
              this.setState({selectedId:no,item,active:true});
             }
        else
       {
           this.setState({selectedId:'',item:'',active:false});
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
                                        <h3 className="card-title" style={{fontSize:'20px'}}>Sales</h3>
                                    </div>
                                    <div className="card-body">
                                        <SaleTable sales={this.state.sales} selectedIdhandler={this.setIdHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={this.state.active ? 'col-4' : 'none'}>
                                {this.state.selectedId ? <SaleSmall sales={this.state.sales} selectedIdhandler={this.setIdHandler} /> : null}
                            </div>
                            <div className={this.state.active ? 'col-8' : 'none'}>
                                {this.state.selectedId ? <SalesPerson sale={this.state.item} cancelHandler={this.cancel} /> : null}
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}

export default sale