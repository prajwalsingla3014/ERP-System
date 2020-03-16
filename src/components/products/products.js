import React, { PureComponent } from 'react'
import ProductTable from "../products/producttable";
import "../invoice/invoicesmall";
import ProductSmall from "../products/productsmall";
import ProductsDetail from "../products/productsdetail";
class Products extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active:false,
            products:[{no:"1",name:"Television",description:"LED",unit:"Kg",id:"985623",quantity:"1",amount:"50000"},
                      {no:"2",name:"Laptop",description:"Slim",unit:"Kg",id:"985624",quantity:"2",amount:"60000"}],
                      selectedId:'',
                      item:''
        }
    }
    cancel = (event) => {
        this.setState({active:false,selectedId:"",item:""})
    }
    setIdHandler = (no) => {
        let itemIndex=this.state.products.findIndex(product => product.no === no);
        let item;
        if(itemIndex !==-1)
        {
            item=this.state.products[itemIndex];
            this.setState({selectedId:no,item,active:true});
        }
        else
        {
            this.setState({selectedId:'',item:'',active:true});
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