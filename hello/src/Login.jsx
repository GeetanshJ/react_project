import React, { useState } from 'react';
import Header from './components/Header';
// import Home from './Home'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';


const Login = () => {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const[all,setAll] = useState(false)
    const[show_text,setShow] = useState("SHOW DATA")

    const navigate = useNavigate();

    function showed(){

        if(show_text === "SHOW DATA" && all === false){
            setShow("HIDE DATA");
            setAll(true);
        }

        else{
            setShow("SHOW DATA");
            setAll(false);
        }

    }

    function logged() {
        if (name === "") {
            alert("Enter email")
        }

        else if (pass === "") {
            alert("Enter password")
        }

        else {
            alert("Logged In");
            navigate('/');
        }
    }

    return (

        <div>
            <Header path="login" />
            <div class="contact_us_2">
                <div class="responsive-container-block big-container">
                    <div class="blueBG">
                    </div>
                    <div class="responsive-container-block container">
                        <form class="form-box">
                            <div class="container-block form-wrapper">
                                <p class="text-blk contactus-head">
                                    LOGIN
                                </p>

                                <div class="responsive-container-block">

                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL*
                                        </p>
                                        <input class="input" id="ipmgh" name="Email" onChange={(e) => { setName(e.target.value) }} value={name} required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PASSWORD*
                                        </p>
                                        <input class="input" id="imgis" name="Password" onChange={(e) => { setPass(e.target.value) }} value={pass} type='password' required placeholder="Please enter password..." />
                                    </div>
                                </div>
                                <div class="submit-btn1" onClick={showed} >
                                    {show_text}
                                </div>

                                <button class="submit-btn" onClick={logged}>LOGIN</button>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.3rem' }}>Want To SIGNUP?</div>
                            <div style={{ textAlign: 'center', marginTop: '0.5em' }}><Link to="/signup" style={{ textAlign: 'center', fontSize: '1.3rem', textDecoration: 'none', color: 'Orange' }}>SIGNUP</Link></div>


                        </form>
                    </div>
                </div>
                <div className="actual_p">

                <div className = {(all  ? " actual " : " demo ")}>
                    <p className={"data"}>Email: {name}</p>
                    <p className={"data"}>Password: {pass}</p>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
