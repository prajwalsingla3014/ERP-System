import React from 'react'
import {Link,Route} from 'react-router-dom';
import General from "../preferences/general.js"
function Sidemenu() {
    return (
        <div className="row">
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <h6 className="card-title">Preferences</h6>
                    </div>
                    <div className="card-body">
                        <Link to="/settings/general">
                            <h6>General</h6>
                        </Link>
                        <h6>Branding</h6>
                        <h6>Portal</h6>
                        <h6>Customers</h6>
                        <h6>Items</h6>
                    </div>
                </div>
            </div>
            <div className="col-9">
                <Route path={"/settings/general"} component={General} />
            </div>
        </div>
    )
}

export default Sidemenu
