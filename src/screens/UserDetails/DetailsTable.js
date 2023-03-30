// import React from "react";
// import "./DetailsTable.scss";

// class DetailsTable extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             list:[]
//         }

//         this.callAPI = this.callAPI.bind(this);
//         this.callAPI();
//     }

//     callAPI() {
//         fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(
//             (response)=>response.json()
//         ).then((data)=>{
//             console.log(data);
//             this.setState({
//                 list:data
//             })
//         })
//     }
    
//     render() { 
//         let user_data = this.state.list.map((item)=>{
//             return(
//                 <div key={item}>
//                     <div className="table-row">{item.userName}</div>
//                     <div className="table-row">{item.accountBalance}</div>
//                     <div className="table-row">{item.accountNumber}</div>
//                     <div className="table-row">{item.bvn}</div>
//                     <div className="table-row">{item.avatar}</div>
//                     <div className="table-row">{item.firstName}</div>
//                     <div className="table-row">{item.lastName}</div>
//                     <div className="table-row">{item.phoneNumber}</div>
//                     <div className="table-row">{item.gender}</div>
//                     <div className="table-row">{item.address}</div>
//                 </div>
//             )
//         })

        
//         return (
//             <div className="table-container">
//                <div className="head-top">
//                     <div className="head">General Details</div>
//                     <div className="head">Document</div>
//                     <div className="head">Bank Details</div>
//                     <div className="head">Loans</div>
//                     <div className="head">Savings</div>
//                     <div className="head">App and System</div>
//                </div>
//                <div className="table">
//                   <div>
//                     {user_data}
//                   </div>
//                </div>
//             </div>
//         )
//     }
// }

// export default DetailsTable;

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const API = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

// const DetailsTable = () => {
//   const { id } = useParams();
//   console.log("~ file: DetailsTable.js ~ line 73 ~ DetailsTable ~ id", id);

//   useEffect(() => {
//     fetch(`${API}?id=${id}`);
//   }, [id]);

//   return (
//     <div style={{ color: "#213F7D", marginTop: "15px", fontSize: "1.2rem", marginLeft: "15px", fontWeight: "500"}}>
//         User Details
//         <a href="https://www.flaticon.com/free-icons/young" title="young icons">Young icons created by Muhammad_Usman - Flaticon</a> 
//     </div>
//   )
// }

// export default DetailsTable;


import React, { useState, useEffect } from 'react';

const DetailsTable = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
       .then((res) => res.json())
       .then((data) => {
        console.log(data);
        setUser(data);
       })
       .catch((err) => {
        console.log(err.message);
       });
  }, []);

  const userDetails = async (id) => {
    await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`, {
       method: 'GET',
       mode: 'cors',
    }).then((response) => {
       if (response.status === 200) {
          setUser(
             users.filter((user) => {
                return user.id === id;
             })
          );
       } else {
          return;
       }
    });
  };

  return (
    <div className="user-details">
       {users.map((user) => {
               return (
                  <div className="post-card" key={user.id}>
                     <h2 className="post-title">{user.userName}</h2>
                     <div className="accountBalance">{user.accountBalance}</div>
                     <div className="bvn">{user.accountNumber}</div>
                     <div className="post-body">{user.profile.bvn}</div>
                     <button className="button" onClick={() => userDetails(user.id)}>
                        User Details
                     </button>
                  </div>
               );
            })}
    </div>
  )
}

export default DetailsTable;