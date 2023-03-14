import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  menu: {
    [theme.breakpoints.down("sm")]: {
    //   marginLeft: "18px",
      marginTop: "5px",
      maxWidth: "65%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "80px",
      marginTop: "5px",
    }
  },
}));

export default function ProfileDropdown() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        // id="basic-button"
        // aria-controls={open ? "basic-menu" : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="arrow-icon">
            <ArrowDropDownIcon />
        </div>
      </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          
        >
          <div onClick={() => navigate("/")}>
            <MenuItem >
                <div 
                style={{ display: "flex", color: "#545F7D", gap: "5px", fontSize: "1rem"}}
                >Logout</div>
            </MenuItem>
          </div>
        </Menu>
    </div>
  );
}