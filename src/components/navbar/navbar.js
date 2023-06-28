import "./navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";

const Navbar = () => {
//   const { toggle, darkMode } = useContext(DarkModeContext);
//   const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span id="nav-span">Sparky</span>
        </Link>
        <HomeOutlinedIcon style={{cursor:"pointer"}}/>
        
          <WbSunnyOutlinedIcon style={{cursor:"pointer"}} />
        
          <DarkModeOutlinedIcon  style={{cursor:"pointer"}}/>
    
        <GridViewOutlinedIcon style={{cursor:"pointer"}} />
        <div className="search">
          <SearchOutlinedIcon style={{cursor:"pointer"}} />
          <input id="search-input" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="nav-right">
        <PersonOutlinedIcon  style={{cursor:"pointer"}}/>
        <EmailOutlinedIcon  style={{cursor:"pointer"}}/>
        <NotificationsOutlinedIcon style={{cursor:"pointer"}} />
        <div className="user">
          <img
          id="user-image"
            // src={currentUser.profilePic}
            alt=""
          />
          {/* <span>{currentUser.name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;