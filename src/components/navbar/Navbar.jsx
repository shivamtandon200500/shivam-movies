import {useState,useContext} from "react"
import "./navbar.scss"
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
import { useHistory } from "react-router-dom";
const Navbar = () => {
    const history = useHistory()
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
      const logoutSession =( )=>{
        dispatch(logout())
        history.push("/login")
      }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <Link to="/" className="link">
                <span>Homepage</span>
                </Link>
                <Link to="/series" className="link">
                    <span className="navbarmainLinks">Series</span>
                </Link>
                <Link to="/movies" className="link">
                    <span className="navbarmainLinks">Movies</span>
                </Link>
                <Link to="#" className="link">
                <span>New and Popular</span>
                </Link>
                <Link to="#" className="link">
                <span>My List</span>
                </Link>
            </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span>KID</span>
                    <NotificationsIcon className="icon"/>
                    <img
                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={logoutSession}>Logout</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
