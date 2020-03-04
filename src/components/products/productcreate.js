import React, { PureComponent } from 'react'

class Productcreate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
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
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Name</label>
                                            <div className="col-10">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Unit</label>
                                            <div className="col-10">
                                                <select className="form-control">
                                                    <option>cm</option>
                                                    <option>Kg</option>
                                                    <option>g</option>
                                                    <option>m</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Id</label>
                                            <div className="col-10">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Selling Price</label>
                                            <div className="col-10">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Description</label>
                                            <div className="col-10">
                                                <textarea className="form-control"></textarea>
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