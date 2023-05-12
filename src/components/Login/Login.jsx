import google from "../../assets/images/icon/google.png";
import facebook from "../../assets/images/icon/facebook.png";
import steam from "../../assets/images/icon/trasparet-steam.png";
import "./Login.css"
const Login = () => {
    return (
        <div className="login">
            <div className="login-title">Choose a Login Method</div>
            <div className="wrapper ">
                <div className="left">
                    <div className="login-button google">
                        <img  className="icon"  src={google} alt="" />
                        Google
                    </div>
                    <div className="login-button facebook">
                        <img className="icon" width='40%' src={facebook} alt="" />
                        Facebook
                    </div>
                    <div className="login-button steam">
                        <img className="icon" width='40%' src={steam} alt="" />
                        Steam
                    </div>

                </div>
                <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
                
                </div>
                <div className="Right">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
                
                </div>

            </div>

        </div>
    )
}

export default Login