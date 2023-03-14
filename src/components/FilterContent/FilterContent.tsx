// import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { makeStyles } from "@material-ui/core";
// import FilterListIcon from '@mui/icons-material/FilterList';
// import "./Hamburger.scss";
// import DropInput from "./dropInput";

// const useStyles = makeStyles((theme) => ({
//   menu: {
//     [theme.breakpoints.down("sm")]: {
//       marginLeft: "18px",
//       marginTop: "5px",
//       maxWidth: "68%",
//     },
//     [theme.breakpoints.between("sm", "md")]: {
//       marginLeft: "80px",
//       marginTop: "5px",
//     }
//   },
// }));

// export default function FilterContent() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const classes = useStyles();
//   const open = Boolean(anchorEl);
//   const handleClick = (event:any) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         <div className="filter-icon">
//           <FilterListIcon />
//         </div>
//       </Button>
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//           className={classes.menu}
//         >
//           <div className="filter-form">
//             <div className="orgSection">
//                 <h3>Organization</h3>
//                 <DropInput />
//             </div>
//             <div className="userSection">
//                 <h3>User</h3>
                
//             </div>
//             <div className="dateSection">
//                 <h3>Date</h3>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DemoContainer components={['DatePicker']}>
//                         <DatePicker label="Date" />
//                     </DemoContainer>
//                 </LocalizationProvider>
//             </div>
//           </div>
//         </Menu>
//     </div>
//   );
// }


import { makeStyles, Tooltip, Modal, Container, Button } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FilterListIcon from '@mui/icons-material/FilterList';
import "./FilterContent.scss";
import DropInput from "./DropInput";

const useStyles = makeStyles((theme) => ({
    fab: {
       position: "fixed",
       bottom: 20,
       right: 20,
    },
    container: {
       width: 350,
       height: 560,
       background: "white",
       position: "absolute",
       top: 0,
       bottom: 0,
       right: 0,
       left: 0,
       margin: "auto",
       overflow: "auto",
       outline: "none",
       [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
       }
    },
    form: {
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(8),
            width: "63vw",
       }
    },
    item: {
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        }
    },
    text: {
      [theme.breakpoints.up("lg")]: {
        width: "19vw",
      }
    }
}));

const FilterContent = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpenAlert(false);
//   };
  return (
    <>
      <Tooltip title="Filter" aria-label="add" onClick={() => setOpen(true)}>
        <FilterListIcon />
      </Tooltip>  
      <Modal open={open}>
        <Container className={classes.container}>
            <form className={classes.form} autoComplete="off">
            <div className="filter-form">
             <div onClick={() => setOpen(false)} style={{ cursor: "pointer", fontWeight: "bold"}}>X</div>
             <div className="section">
                 <h3>Organization</h3>
                 <div className="inputContent">
                  <DropInput />
                 </div> 
             </div>
             <div className="section">
                 <h3>Username</h3>
                 <TextField
                    id="outlined-textarea"
                    label="User"
                    className={classes.text}
                    multiline
                  />
             </div>
             <div className="section">
                 <h3>Email</h3>
                 <TextField
                    id="outlined-textarea"
                    label="Email"
                    className={classes.text}
                    multiline
                  />
             </div>
             <div className="section">
                 <h3>Date</h3>
                 <TextField
                    id="outlined-textarea"
                    label="Date"
                    className={classes.text}
                    multiline
                  />
             </div>
             <div className="section">
                 <h3>Phone Number</h3>
                 <TextField
                    id="outlined-textarea"
                    label="Phone Number"
                    className={classes.text}
                    multiline
                  />
             </div>
             <div className="section">
                 <h3>Status</h3>
                 <div className="inputContent">
                  <DropInput />
                 </div> 
             </div>
             <div className={classes.item}>
                    <Button variant="outlined" color="primary" style={{ marginRight: 70, padding: "10px 20px 10px 20px" }}>Reset</Button>
                    <Button color="primary" onClick={() => setOpen(false)} style={{ backgroundColor: "#39CDCC", color: "white", padding: "10px 20px 10px 20px"}}>Filter</Button>
              </div>
           </div>
            </form>
        </Container>
      </Modal>
    </>
  );
}

export default FilterContent;