import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import "./MoreIcon.scss";

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
  menuContent: {
    fontSize: "0.4rem",
    cursor: "pointer",
    gap: "5px",
    color: "#545F7D"
  }
}));

export default function MoreIcon() {
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
        <div className="more-icon">
          <MoreVertIcon />
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
          className={classes.menuContent}
        >
          <div onClick={() => navigate("/user-details")}>
            <MenuItem >
                <div style={{ display: "flex", color: "#545F7D", gap: "5px", fontSize: "1rem"}}><VisibilityIcon />View Details</div>
            </MenuItem>
          </div>
          <MenuItem>
            <div style={{ display: "flex", color: "#545F7D", gap: "5px", fontSize: "1rem"}}>
                <PersonRemoveAlt1Icon />Backlist User
            </div>
          </MenuItem>
          <MenuItem>
            <div style={{ display: "flex", color: "#545F7D", gap: "5px", fontSize: "1rem"}}>
                <PersonAddAlt1Icon />Activate User
            </div>
          </MenuItem>
        </Menu>
    </div>
  );
}