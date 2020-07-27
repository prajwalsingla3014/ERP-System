import React, { Component } from 'react'
import axios from 'axios';
import ExpenseTable from "../expenses/expensetable";
import ExpenseSmall from "../expenses/expensesmall";
import ExpenseDetail from "../expenses/expensedetail";
import "../invoice/invoicenone.css";
class Expenses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active:false,
            expenses:[{
                id:" ",
                date:" ",
                amount:" ",
                hsn_code:" ",
                customer:{
                    first_name:' ',
                    last_name:' ',
                    display_name:' ',
                    payment_details:{
                        shipping_address:{
                            address:' ',
                            city:' ',
                            state:{
                                name:' ',
                            }
                        }
                    },
                },                
            category:{
                name:' ',
                description:' '
            },
            gst:{
                name:' ',
                description:' '
            },
            }],
            selectedId:'',
            item:''
        }
    }
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/invoice/expense/?ordering=created_at")
            .then(res => {
                this.setState({expenses:res.data});
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        const script=document.createElement("script");
        console.log(script)
        script.src="js/expensetablesort.js";
        script.async=true;
        document.body.appendChild(script);
    }
    cancel = (event) => {
        this.setState({active:false,selectedId:"",item:""})
    }
    setIdHandler = (id) => {
        let itemIndex=this.state.expenses.findIndex(expense => expense.id === id);
        console.log(itemIndex);
        let item;
        if(itemIndex !==-1)
        {
            item=this.state.expenses[itemIndex];
            this.setState({selectedId:id,item,active:true});
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
                    <div className='row'>
                        <div className={this.state.active ? 'none' : 'col-12'}>
                            <div className="card" style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px',fontFamily:'Acme'}}>Expenses</h3>
                                </div>
                                <div className="card-body">
                                    <ExpenseTable expenses={this.state.expenses} selectedIdHandler={this.setIdHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={this.state.active ? 'col-4' : 'none'}>
                            {this.state.selectedId ? <ExpenseSmall expenses={this.state.expenses} selectedIdHandler={this.setIdHandler} /> : null}
                        </div>
                        <div className={this.state.active ? 'col-8' : 'none'}>
                            {this.state.selectedId ? <ExpenseDetail expense={this.state.item} cancelHandler={this.cancel} /> : null}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Expenses;
