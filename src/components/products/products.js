import React, { PureComponent } from 'react'
import ProductTable from "../products/producttable";
import "../invoice/invoicesmall";
import ProductSmall from "../products/productsmall";
import ProductsDetail from "../products/productsdetail";
import axios from 'axios';
class Products extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active:false,
            products:[{id:" ",name:" ",description:" ",unit:" ",hsn_code:" ",quantity_total:" ",selling_price:" ",taxable:" ",tax:{name:" ",rate:" "}}],
                      selectedId:'',
                      item:''
        }
    }
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/inventory/product/?ordering=created_at")
            .then(res => {
                this.setState({products:res.data});
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        const script=document.createElement("script");
        console.log(script)
        script.src="js/customertablesort.js";
        script.async=true;
        document.body.appendChild(script);
    }
    cancel = (event) => {
        this.setState({active:false,selectedId:"",item:""})
    }
    setIdHandler = (id) => {
        let itemIndex=this.state.products.findIndex(product => product.id === id);
        let item;
        if(itemIndex !==-1)
        {
            item=this.state.products[itemIndex];
            this.setState({selectedId:id,item,active:true});
        }
        else
        {
            this.setState({selectedId:'',item:'',active:true});
        }
    }
    render() {
        return (
            <div>
                <section className="content">
                    <div className='row'>
                        <div className={this.state.active ? 'none' : 'col-12'}>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px'}}>Items</h3>
                                </div>
                                <div className="card-body">
                                    <ProductTable products={this.state.products} selectedIdHandler={this.setIdHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={this.state.active ? 'col-4' : 'none'}>
                            {this.state.selectedId ? <ProductSmall products={this.state.products} selectedIdHandler={this.setIdHandler} /> : null}
                        </div>
                        <div className={this.state.active ? 'col-8' : 'none'}>
                            {this.state.selectedId ? <ProductsDetail product={this.state.item} cancelHandler={this.cancel} /> : null}
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default Products