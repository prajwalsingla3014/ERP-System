import React, { PureComponent, useDebugValue } from 'react'
import SaleTable from "../sales/saletable";
import SaleIndividual from "../sales/saleindividual";
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
                        {this.state.selectedId ? <SaleIndividual sale={this.state.item} active={this.state.active} cancelHandler={this.cancel}/> : null}
                </section>
            </div>
        )
    }
}

export default sale