import React from 'react'

function General() {
    return (
        <div className="card">
            <div className="card-header">
                <h6 className="card-title">General</h6>
            </div>
            <div className="card-body">
                <h6>Select the modules you like to enable</h6>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input mt-2" />
                        <h6 className="mt-2 ml-1">Bill of Suply</h6>
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input mt-2" />
                        <h6 className="mt-2 ml-1">Estimates</h6>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default General
