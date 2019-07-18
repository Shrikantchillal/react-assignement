import React from "react";

const SidebarContent = (props) => {    
    return (
        <div>
            <button type="button" className="close mt-1 mr-2" aria-label="Close" onClick={() => props.closeSide(false)}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="p-3">
                <h4>Address: </h4>
                <div className="pt-1 address-info">
                    <div className="address-row">
                        <label>Suite:</label> <span>{props.userDetails.suite}</span>
                    </div>
                    <div className="address-row">
                        <label>Street:</label> <span>{props.userDetails.street}</span>
                    </div>
                    <div className="address-row">
                        <label>City:</label> <span>{props.userDetails.city}</span>
                    </div>
                    <div className="address-row">
                        <label>Zipcode:</label> <span>{props.userDetails.zipcode}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarContent;
