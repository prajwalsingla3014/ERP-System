import React, { PureComponent } from 'react'
import axios from 'axios';
class Productcreate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            type:' ',
            name:' ',
            sku:' ',
            unit:' ',
            hsn_code:' ',
            quantity:' ',
            selling_price:' ',
            description:' '
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault();
        const data={
            type:this.state.type,
            name:this.state.name,
            sku:this.state.sku,
            unit:this.state.unit,
            hsn_code:this.state.hsn_code,
            quantity:this.state.quantity,
            selling_price:this.state.selling_price,
            description:this.state.description
        }
        axios.post("https://farzi-erp.herokuapp.com/inventory/product/?ordering=created_at",data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-warning">
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px'}}>New Product</h3>
                                </div>
                                <form className="form-horizontal" onSubmit={this.submitHandler}>
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Type</label>
                                            <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="goods" checked={this.state.type === "goods"} name="type" id="goods" onChange={this.changeHandler}/>
                                                <label className="form-check-label " for="goods" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Goods
                                                </label>
                                            </div>
                                            <div className="col-1 form-check ml-3" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="service"  checked={this.state.type === "service"} name="type" id="service" onChange={this.changeHandler}/>
                                                <label className="form-check-label" for="service" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Service
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Name</label>
                                            <div className="col-10">
                                                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.changeHandler} ></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>SKU</label>
                                            <div className="col-10">
                                                <input type="text" name="sku" className="form-control" value={this.state.sku} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Unit</label>
                                            <div className="col-10">
                                                <select className="form-control" onChange={this.changeHandler} name="unit">
                                                    <option value="g">g</option>
                                                    <option value="m">m</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="cm">cm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>HSN Code</label>
                                            <div className="col-10">
                                                <input type="text" name="hsn_code" className="form-control" value={this.state.hsn_code} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Quantity</label>
                                            <div className="col-10">
                                                <input type="text" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Selling Price</label>
                                            <div className="col-10">
                                                <input type="text" name="selling_price" className="form-control" value={this.state.selling_price} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Description</label>
                                            <div className="col-10">
                                                <textarea className="form-control" name="description" onChange={this.changeHandler} value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-outline-success">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Productcreate