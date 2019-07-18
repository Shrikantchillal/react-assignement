import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from 'react-sidebar';
import SidebarContent from './component/SidebarContent';
import "../index.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            sidebarOpen: false,
            info : [],
            showSidebar: false,
            tableHead : ["ID", "Name", "Username", "Email", "Address"]
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.onSetSidebarClose = this.onSetSidebarClose.bind(this);
    }    

    onSetSidebarOpen(open, address) {
        this.setState({ 
            sidebarOpen: open,
            info: address
        })        
    }
    onSetSidebarClose(close) {
        this.setState({ 
            sidebarOpen: close,
        })        
    }

    componentDidMount() {
        const apiUrl =  'http://jsonplaceholder.typicode.com/users';
        axios.get(apiUrl)
        .then((res) => {
            const contacts = res.data;
            this.setState({contacts});
        })
        .catch((error, data) => {
            console.log(error, data);
        })
    }

    render() {
        const tableHeading = this.state.tableHead.map((data, index)=>{
            return <th key={index}>{data}</th>
        });        
        return(
            <div className="container">
                <Sidebar 
                    sidebar={
                        <SidebarContent userDetails={this.state.info} closeSide={() => this.onSetSidebarClose(false)} />
                    }
                    open={this.state.sidebarOpen}
                    overlayId={'pageOverlay'}
                    sidebarId={'pageSidebar'}
                    styles={{sidebar: { background: "#fff", width: "280px" }}}
                    children={                        
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                {tableHeading}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.contacts.map((contact) => (
                                                <tr key={contact.id} className={ contact.address.zipcode.includes('-') ? '' : 'table-warning' } >                                                
                                                    <td>{contact.id}</td>
                                                    <td>{contact.name}</td>
                                                    <td>{contact.username}</td>
                                                    <td>{contact.email}</td>
                                                    <td><button className="btn btn-primary" onClick={() => this.onSetSidebarOpen(true, contact.address)}>Address</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        }>
            </Sidebar>            
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))