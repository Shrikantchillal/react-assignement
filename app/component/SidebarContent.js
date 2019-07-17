import React from "react";

const SidebarContent = (props) => {    
    return (
        <div>
            <button type="button" className="close" aria-label="Close" onClick={() => props.closeSide(false)}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="p-2">
                {props.userDetails.street}, {props.userDetails.suite}, <br></br> {props.userDetails.city} - {props.userDetails.zipcode}
            </div>
        </div>
    )
}

export default SidebarContent;
