import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
const Login = () => {
    const[name,setName] = useState("")
    const[pass,setPass] = useState("")

    function logged(){
        if(name==="" || pass===""){
            alert("Fill details first")
        }
        
        else{
            alert("Logged In")
        }
    }
    return (
        
        <div>
            <Header path = "login"/>
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
                                        <input class="input" id="ipmgh" name="Email" onChange={(e)=>{setName(e.target.value)}} value={name} required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PASSWORD*
                                        </p>
                                        <input class="input" id="imgis" name="Password" onChange={(e)=>{setPass(e.target.value)}} value={pass} type='password' required placeholder="Please enter password..." />
                                    </div>
                                </div>
                                <button class="submit-btn" onClick={logged}>
                                    Submit
                                </button>
                            </div>
                            <div style={{textAlign:'center',marginTop:'1rem',fontSize:'1.3rem'}}>Want To SIGNUP?</div>
                            <div style={{textAlign:'center',marginTop:'0.5em'}}><Link to="/signup" style={{textAlign:'center',fontSize:'1.3rem',textDecoration:'none',color:'Orange'}}>SIGNUP</Link></div>

                            
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
