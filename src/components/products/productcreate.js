import React, { PureComponent } from 'react';
import axios from 'axios';
import {AnchorButton, Intent, ProgressBar} from "@blueprintjs/core";
import "../invoice/invoicenone.css";
import "./style.css";
import _ from "lodash";
class Productcreate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            type:' ',
            name:' ',
            sku:' ',
            unit:' ',
            hsn_code:' ',
            sac:' ',
            quantity:' ',
            selling_price:' ',
            description:' ',
            taxable:' ',
            rate:' ',
            active:false,
            check:false,
            check1:false,
            tax:[],
            loadedFiles:[]
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    taxchangeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value,active:!this.state.active})
    }
    goodchangeHandler = (e) => {
        if(this.state.check1)
        {
            this.setState({[e.target.name]:e.target.value,check1:!this.state.check1,check:!this.state.check})
        }
        else
        {
            this.setState({[e.target.name]:e.target.value,check:!this.state.check})
        }
    }
    servicechangeHandler = (e) => {
        if(this.state.check)
        {
            this.setState({[e.target.name]:e.target.value,check:!this.state.check,check1:!this.state.check1})
        }
        else
        {
            this.setState({[e.target.name]:e.target.value,check1:!this.state.check1})
        }
    }
    submitHandler = async (e) => {
        e.preventDefault();
        let taxes={
            name:this.state.rate.slice(0,4),
            rate:this.state.rate.slice(4,6)
        }
        /*await axios.post("https://farzi-erp.herokuapp.com/inventory/tax/?ordering=created_at",taxes)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })*/
        await axios.get("https://farzi-erp.herokuapp.com/inventory/tax/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                var t1=(res.data)[t-1].id;
                this.setState({
                    tax:[...this.state.tax,t1]
                });
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        const data={
            type:this.state.type,
            name:this.state.name,
            sku:this.state.sku,
            unit:this.state.unit,
            hsn_code:this.state.hsn_code,
            sac:this.state.sac,
            quantity:this.state.quantity,
            selling_price:this.state.selling_price,
            description:this.state.description,
            taxable:this.state.taxable,
            tax:this.state.tax
        }
        console.log(data)
        /*axios.post("https://farzi-erp.herokuapp.com/inventory/product/?ordering=created_at",data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })*/
        
    }
    onFileLoad(e) {
        //Get current selected or dropped file (it gives you the ability to load multiple images).
        const file = e.currentTarget.files[0];
        //Create instance 
        let fileReader = new FileReader();
        //Register event listeners
        fileReader.onload = () => {
          console.log("IMAGE LOADED: ", fileReader.result);
          const file={
              data:fileReader.result,
              isUploading:false
          }
          this.addLoadedFile(file);
        }
        //Operation Aborted 
        fileReader.onabort = () => {
          alert("Reading Aborted");
        }
        //Error when loading 
        fileReader.onerror = () => {
          alert("Reading ERROR!");
        }
        //Read the file as a Data URL (which gonna give you a base64 encoded image data)
        fileReader.readAsDataURL(file);
      }
    addLoadedFile(file) {
        this.setState((prevState) => ({
          loadedFiles: [...prevState.loadedFiles,file]
        }));
    }
    removeLoadedFile(file) {
        this.setState((prevState) => {
          let loadedFiles = prevState.loadedFiles;
          let newLoadedFiles = _.filter(loadedFiles, (ldFile) => {
            return ldFile != file;
          });
          return {loadedFiles: newLoadedFiles};
        });
    }
    removeAllLoadedFile() {
      this.setState({loadedFiles: []});
    }
    updateLoadedFile(oldFile,newFile) {
        this.setState((prevState) => {
            const loadedFiles=[...prevState.loadedFiles];
            _.find(loadedFiles,(file,idx) => {
                if(file == oldFile)  loadedFiles[idx]=newFile;
            });
            return  {loadedFiles};
        })
        return newFile; 
    }
    onUpload() {
        const {loadedFiles} = this.state;
        loadedFiles.map((file, idx) => {
          let newFile = this.updateLoadedFile(file, {...file,isUploading: true});
          setTimeout(() => {
            this.updateLoadedFile(newFile, {...newFile,isUploading: false});}, 3000);
        });
    }
    render() {
        const {loadedFiles}=this.state;
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
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Type</label>
                                            <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="goods" checked={this.state.type === "goods"} name="type" id="goods" onChange={this.goodchangeHandler}/>
                                                <label className="form-check-label " for="goods" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Goods
                                                </label>
                                            </div>
                                            <div className="col-1 form-check ml-3" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="service"  checked={this.state.type === "service"} name="type" id="service" onChange={this.servicechangeHandler}/>
                                                <label className="form-check-label" for="service" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Service
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row" style={{height:'43px'}}>
                                            <label className="col-2 col-form-label" style={{fontSize:'18px',height:'41px'}}>Name</label>
                                            <div className="col-4" style={{height:"41px"}}>
                                                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.changeHandler} ></input>
                                            </div>
                                            {/* Product Image Section */}
                                            <div className="col-6 inner-container" style={{display:'flex',flexDirection:'column'}}>
                                                <div className="draggable-container">
                                                    <input type="file" id="file-browser-input" name="file-browser-input" ref={input => this.fileInput = input} onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }} onDrop={this.onFileLoad.bind(this)} onChange={this.onFileLoad.bind(this)} />
                                                    <div className="files-preview-container">
                                                        {loadedFiles.map((file,idx) => {
                                                            return <div className="file" key={idx}>
                                                                            <img src={file.data} />
                                                                            <div className="container">
                                                                                <span className="progress-bar">
                                                                                    {file.isUploading && <ProgressBar />}
                                                                                </span>
                                                                                <span className="remove-btn" onClick={() => this.removeLoadedFile(file)}>
                                                                                    <i className="fas fa-times" style={{fontSize:'20px'}}></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                        })}
                                                    </div>
                                                    <div className="helper-text">Add Images</div>
                                                    <div className="file-browser-container">
                                                        <button className="btn btn-outline-info" onClick={() => this.fileInput.click()}>Browse</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>SKU</label>
                                            <div className="col-4">
                                                <input type="text" name="sku" className="form-control" value={this.state.sku} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Unit</label>
                                            <div className="col-4">
                                                <select className="form-control" onChange={this.changeHandler} name="unit">
                                                    <option value="g">g</option>
                                                    <option value="m">m</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="cm">cm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className={this.state.check ? "col-2 col-form-label" : "none"} style={{fontSize:'18px'}}>HSN Code</label>
                                            <label className={this.state.check1 ? "col-2 col-form-label" : "none"} style={{fontSize:'18px'}}>SAC Code</label>
                                            <div className={this.state.check ? "col-4" : "none"}>
                                                <input type="text" name="hsn_code" className="form-control" value={this.state.hsn_code} onChange={this.changeHandler}></input>
                                            </div>
                                            <div className={this.state.check1? "col-4" : "none"}>
                                                <input type="text" name="sac" className="form-control" value={this.state.sac} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Tax Preference</label>
                                            <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="true" checked={this.state.taxable === "true"} name="taxable" id="tax" onChange={this.taxchangeHandler}/>
                                                <label className="form-check-label " for="tax" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Taxable
                                                </label>
                                            </div>
                                            <div className="col-2 form-check ml-3" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="false"  checked={this.state.taxable === "false"} name="taxable" id="non-tax" onChange={this.taxchangeHandler}/>
                                                <label className="form-check-label" for="non-tax" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Non-Taxable
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Quantity</label>
                                            <div className="col-10">
                                                <input type="text" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Selling Price</label>
                                            <div className="col-10">
                                                <input type="text" name="selling_price" className="form-control" value={this.state.selling_price} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Description</label>
                                            <div className="col-10">
                                                <textarea className="form-control" name="description" onChange={this.changeHandler} value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <div className={this.state.active? "form-group row" : "none"}>
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Intra State Tax Rate</label>
                                            <div className="col-10">
                                                <select className="form-control mt-2" onChange={this.changeHandler} name="rate">
                                                    <option value="GST 0 % [0%]">GST0 [0%]</option>
                                                    <option value="GST 5 % [5%]">GST5 [5%]</option>
                                                    <option value="GST 12% [12%]">GST12 [12%]</option>
                                                    <option value="GST 18% [18%]">GST18 [18%]</option>
                                                    <option value="GST 28% [28%]">GST28 [28%]</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={this.state.active ?  "form-group row" :"none"}>
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}} >Inter State Tax Rate</label>
                                            <div className="col-10">
                                                <select className="form-control mt-2" onChange={this.changeHandler} name="rate">
                                                    <option value="IGST0 %  [0% ]">IGST0 [0%]</option>
                                                    <option value="IGST5 %  [5% ]">IGST5 [5%]</option>
                                                    <option value="IGST12%[12% ]">IGST12 [12%]</option>
                                                    <option value="IGST18%[18% ]">IGST18 [18%]</option>
                                                    <option value="IGST28%[28% ]">IGST28 [28%]</option>
                                                </select>
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
                {console.log(this.state.loadedFiles)}
            </div>
        )
    }
}

export default Productcreate