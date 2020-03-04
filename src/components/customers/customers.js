import React, { Component } from 'react';
import CustomerIndividual from "../customers/customerindividual";
import CustomerTable from "../customers/customertable";
import "../invoice/invoicesmall";
export default class customers extends Component {
    componentDidMount()
    {
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
            customers:[{no:"1",name:"Suresh Goel",email:"xyz@gmail.com",city:"Noida",product:"LED TV,Mobile",amount:"75000",contact:"9899234103"},
                       {no:"2",name:"Rohit Bansal",email:"xywz@gmail.com",city:"Noida",product:"LED TV",amount:"55000",contact:"9879230103"},
                       {no:"3",name:"Rahul Singh",email:"bxyz@gmail.com",city:"Gurugram",product:"LED TV",amount:"65000",contact:"9693235103"},
                       {no:"4",name:"Mohit Sinha",email:"axyz@gmail.com",city:"Greater Noida",product:"Refrigerator",amount:"115000",contact:"9822234501"},
                       {no:"5",name:"Harshit ",email:"nxymz@gmail.com",city:"Delhi",product:"Soundbar",amount:"35000",contact:"9829254703"}],
            selectedId:'',
            detail:''
        }
    }
    cancel = (event) => 
    {
        console.log(this.state.active)
        this.setState({active:false,selectedId:'',product:''})
    }
    setIdHandler=(no)=>{
        let detailIndex=this.state.customers.findIndex(customer=>customer.no===no);
        let detail;
        if(detailIndex!==-1)
            {
              detail=this.state.customers[detailIndex];
              this.setState({selectedId:no,detail,active:true});
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
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Customers Details</h3>
                                </div>
                                <div className="card-body">
                                    <CustomerTable customers={this.state.customers} selectedIdHandler={this.setIdHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.selectedId ? <CustomerIndividual customer={this.state.detail} active={this.state.active} cancelHandler={this.cancel}/> : null}
                </section>
            </div> 
        );
    }
}

