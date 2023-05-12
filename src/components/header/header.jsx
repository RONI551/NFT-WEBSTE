import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/data/logo" 
import { Link } from "react-router-dom";
import menus from "../../assets/data/menu"
import Button from "../Button/buttonOne";
import AvatarImg from '../../assets/images/icon/noAvatart.png'
const Header = () => {
    const user = false;
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100)
        })

        return () => {
            return () => {
                setScroll({})
            }
        }
    }, [])
    const [menuActive, setMenuActive] = useState(null)
    const handleMenuActive = ()=>{
        console.log("button cliked")
        console.log(menuActive)
       setMenuActive(!menuActive)
    }
    return (
        <header id="header-main  " className={`header js-header ${scroll ? 'isFixed' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body d-flex justify-content-between">
                         <div className="header__logo">
                          <Link to="/">
                            <img src={logo} id="site-logo" alt="" />
                          </Link> 
                         </div>
                         <div className="header__right">
                          <nav id="main-nav" className={`main-nav ${menuActive? 'active':"" }` } >
                            <ul id="menu-primary-menu" className="menu">
                             {
                                menus.map((data,index) =>(
                                    <li key={index}  className={`menu-item`}>
                                     <Link to={data.links}>{data.name}</Link>
                                    </li>
                                 ))
                             }
                            </ul>
                          </nav>
                          {user?
                            <div className="Profile">
                         
                            <img src={AvatarImg} alt="" className="profile-image" />
                         
                            <h2 className="profileName">jon dae</h2>
                            <button className="btn-action user_logout">Logout</button>
                            </div>
                            :
                            <div className="button">
                           <Button/>
                          </div>}
                          <div className={`mobile-button  ${menuActive?"active":''}`} onClick={handleMenuActive}>
                           <span></span>
                          </div>
                         </div>  
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;