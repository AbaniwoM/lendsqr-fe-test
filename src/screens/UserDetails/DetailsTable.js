import React from "react";
import "./DetailsTable.scss";

class DetailsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }

        this.callAPI = this.callAPI.bind(this);
        this.callAPI();
    }

    callAPI() {
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(
            (response)=>response.json()
        ).then((data)=>{
            console.log(data);
            this.setState({
                list:data
            })
        })
    }
    
    render() { 
        let user_data = this.state.list.map((item)=>{
            return(
                <div key={item}>
                    <div className="table-row">{item.userName}</div>
                    <div className="table-row">{item.accountBalance}</div>
                    <div className="table-row">{item.accountNumber}</div>
                    <div className="table-row">{item.bvn}</div>
                    <div className="table-row">{item.avatar}</div>
                    <div className="table-row">{item.firstName}</div>
                    <div className="table-row">{item.lastName}</div>
                    <div className="table-row">{item.phoneNumber}</div>
                    <div className="table-row">{item.gender}</div>
                    <div className="table-row">{item.address}</div>
                </div>
            )
        })

        
        return (
            <div className="table-container">
               <div className="head-top">
                    <div className="head">General Details</div>
                    <div className="head">Document</div>
                    <div className="head">Bank Details</div>
                    <div className="head">Loans</div>
                    <div className="head">Savings</div>
                    <div className="head">App and System</div>
               </div>
               <div className="table">
                  <div>
                    {user_data}
                  </div>
               </div>
            </div>
        )
    }
}

export default DetailsTable;