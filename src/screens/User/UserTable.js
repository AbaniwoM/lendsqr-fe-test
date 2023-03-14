// import React, { useState, useEffect } from 'react';
// import "./UserTable.scss";
// import MaterialTable from "@material-table/core";

// const UserTable = () => {
//   const [data, setData] = useState([]);
//   const columns = [
//     { title: "ID", field: "id" },
//     { title: "ORGANIZATION", field: "orgName" },
//     { title: "USERNAME", field: "userName" },
//     { title: "EMAIL", field: "email" },
//     { title: "PHONE NUMBER", field: "phoneNumber" },
//     { title: "DATE JOINED", field: "createdAt" },
//     { title: "STATUS", field: "status" },
//   ]

//   useEffect(() => {
//     fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
//     .then(res=>res.json())
//     .then(res=>setData(res));
//   },[])

//   return (
//     <div className="user-table">
//         <tr>
//             <th>{id}</th>
//             <th>th2</th>
//             <th>th3</th>
//             <th>th3</th>
//             <th>th3</th>
//             <th>th3</th>
//         </tr>
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//     </div>
//   )
// }

// export default UserTable;

// import React from "react";
// import "./UserTable.scss";
// import FilterListIcon from '@mui/icons-material/FilterList';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// class UserTable extends React.Component {
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
//         let tb_data = this.state.list.map((item)=>{
//             return(
//                 <tr key={item.id}>
//                     <td className="table-row">{item.orgName}</td>
//                     <td className="table-row">{item.userName}</td>
//                     <td className="table-row">{item.email}</td>
//                     <td className="table-row">{item.phoneNumber}</td>
//                     <td className="table-row">{item.createdAt}</td>
//                     <td className="table-row">
//                         {item.lastActiveDate}
//                         <MoreVertIcon className="more-icon"/> 
//                     </td>
//                 </tr>
//             )
//         })

        
//         return (
//             <div className="table-container">
//                <div className="head-top">
//                     <div className="head">ORGANIZATION <p><FilterListIcon /></p></div>
//                     <div className="head">USERNAME <p><FilterListIcon /></p></div>
//                     <div className="head">EMAIL <p><FilterListIcon /></p></div>
//                     <div className="head">PHONE NUMBER <p><FilterListIcon /></p></div>
//                     <div className="head">DATE JOINED <p><FilterListIcon /></p></div>
//                     <div className="head">STATUS <p><FilterListIcon /></p></div>
//                </div>
//                <table className="table">
//                   <tbody>
//                     {tb_data}
//                   </tbody>
//                </table>
//             </div>
//         )
//     }
// }

// export default UserTable;


import React, { useEffect, useState } from "react";
import "./UserTable.scss";
import FilterContent from "../../components/FilterContent/FilterContent"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MoreIcon from "./MoreIcon";


const renderData = (data) => {
  return (
    <ul>
      {data.map((item, id) => {
        return (
            <tr key={item.id}>
                <td className="table-row">{item.orgName}</td>                   <td className="table-row">{item.userName}</td>
                <td className="table-row">{item.email}</td>
                <td className="table-row">{item.phoneNumber}</td>
                <td className="table-row">{item.createdAt}</td>
                <td className="table-row icon">
                   {item.lastActiveDate}
                    <MoreIcon className="more-icon"/> 
                </td>
            </tr>
        );
      })}
    </ul>
  );
};

function PaginationComponent() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  // const handleLoadMore = () => {
  //   setitemsPerPage(itemsPerPage + 5);
  // };

  return (
    <div className="table-container">
      <div className="table">
      <div className="head-top">
        <div className="head">ORGANISATION <p><FilterContent /></p></div>
        <div className="head">USERNAME <p><FilterContent /></p></div>
        <div className="head">EMAIL <p><FilterContent /></p></div>
        <div className="head">PHONE NUMBER <p><FilterContent /></p></div>
        <div className="head">DATE JOINED <p><FilterContent /></p></div>
        <div className="head">STATUS <p><FilterContent /></p></div>
      </div>
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            <KeyboardArrowLeftIcon />
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            <KeyboardArrowRightIcon />
          </button>
        </li>
      </ul>
      {/* <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button> */}
      </div>
    </div>
  );
}

export default PaginationComponent;