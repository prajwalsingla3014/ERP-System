import React from 'react'

export default function customersform() {
    return (
        <div>
            <section className='content'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px'}}>Customers Entry Form</h3>
                                </div>
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label for="inputName" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputName" placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputEmail" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputProduct" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Products</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" id="inputProducts" placeholder="Enter Products to buy" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputAddress" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Address</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputCity" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>City</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputCity" placeholder="Enter City" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputState" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>State</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputState" placeholder="Enter State" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputPin" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Pin</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputState" placeholder="Enter PinCode" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputNumber" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Contact</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputState" placeholder="Enter Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-outline-success">Submit</button>
                                        <button type="submit" className="btn btn-outline-danger float-right">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}
