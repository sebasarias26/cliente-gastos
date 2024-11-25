import SingIn from "../SingIn/SingIn";
import SingBackground from '../../assets/SingBackground.jpg'
import './Login.css'

function Login () {
    return (
        <>
            <div className="login-container">
                <div className="left-container">
                        <img src={SingBackground} className="backgroundSingIn" />
                </div>
                <div className="right-container">
                    <SingIn/>
                </div>
            </div>
        </>
    )
}

export default Login;