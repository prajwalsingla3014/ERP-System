import React from 'react'

export default function suppliersform() {
    return (
        <div>
            <section className="content">
               <div className="row">
                   <div className="col-md-12">
                       <div className="card card-info">
                           <div className="card-header">
                               <h3 className="card-title" style={{fontSize:'20px'}}>Supplier Entry</h3>
                           </div>
                           <form className="form-horizontal">
                               <div className="card-body">
                                   <div className="form-group row">
                                       <label for="inputName" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Name</label>
                                       <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputName" placeholder="Enter Name"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputEmail" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Email</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputEmail" placeholder="Enter Email"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputProducts" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Products</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputProducts" placeholder="Enter Products to sale"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputQuantity" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Quantity</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputQuantity" placeholder="Enter Quantity"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputAddress" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Address</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputCity" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>City</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputCity" placeholder="Enter City"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputState" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>State</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputState" placeholder="Enter State"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputPin" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Pincode</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputPin" placeholder="Enter Pincode"></input>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label for="inputNumber" className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Contact</label>
                                       <div className="col-sm-10">
                                           <input type="text" className="form-control" id="inputNumber" placeholder="Enter Number"></input>
                                       </div>
                                   </div>
                               </div>
                               <div className="card-footer">
                                   <button type="button" className="btn btn-outline-success">Submit</button>
                                   <button type="button" className="btn btn-outline-danger float-right">Cancel</button>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
            </section> 
        </div>
    )
}
