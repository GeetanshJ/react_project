import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const[first,setFirst] = useState("")
    const[last,setLast] = useState("")
    const[email,setEmail] = useState("")
    const[pass1,setPass1] = useState("")
    const[pass2,setPass2] = useState("")
    const[all,setAll] = useState(false)
    const[show_text,setShow] = useState("SHOW DATA")

    let navigate = useNavigate();


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


    function signed(){
        if(first === ""){
            alert("Enter First name")
        }

        else if(last === ""){
            alert("Enter Last name")
        }

        else if(email === ""){
            alert("Enter email")
        }

        else if(pass1 === ""){
            alert("Enter password")
        }

        else if(pass2 === ""){
            alert("Enter confirmation password")
        }

        else if(pass1 !== pass2){
            alert("Password does not match")
        }

        else{
            alert("Signed In");
            navigate("/login")
        }
    }





    
    return (

        <div>
            <Header path="signup" />

            <div class="contact_us_2">
                <div class="responsive-container-block big-container">
                    <div class="blueBG">
                    </div>
                    <div class="responsive-container-block container">
                        <form class="form-box">
                            <div class="container-block form-wrapper">
                                <p class="text-blk contactus-head">
                                    SIGN-UP
                                </p>
                                <p class="text-blk contactus-subhead">
                                Please fill in this form to create an account.
                                </p>
                                <div class="responsive-container-block">
                                    <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                                        <p class="text-blk input-title">
                                            FIRST NAME*
                                        </p>
                                        <input class="input" id="ijowk"onChange={(e)=>{setFirst(e.target.value)}} value={first} name="FirstName" required placeholder="Please enter first name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            LAST NAME*
                                        </p>
                                        <input class="input" id="indfi" onChange={(e)=>{setLast(e.target.value)}} value={last} name="Last Name" required placeholder="Please enter last name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL*
                                        </p>
                                        <input class="input" id="ipmgh"onChange={(e)=>{setEmail(e.target.value)}} value={email} name="Email"  required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PASSWORD*
                                        </p>
                                        <input class="input" id="imgis" name="Password" onChange={(e)=>{setPass1(e.target.value)}} value={pass1} type='password' required placeholder="Please enter password..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            CONFIRM PASSWORD*
                                        </p>
                                        <input class="input" id="imgis" name="Password" type='password' onChange={(e)=>{setPass2(e.target.value)}} value={pass2} required placeholder="Please enter password..." />
                                    </div>
                                </div>

                                <div class="submit-btn1" onClick={showed} >
                                    {show_text}
                                </div>

                                <button class="submit-btn" onClick={signed} target="home">
                                    SIGN UP
                                </button>
                            </div>
                            
                            <div style={{textAlign:'center',marginTop:'1rem',fontSize:'1.3rem'}}> Already a Member?</div>
                            <div  style={{textAlign:'center',marginTop:'0.5em'}}><Link to="/login" style={{textAlign:'center',fontSize:'1.3rem',textDecoration:'none',color:'Orange'}}>LOGIN</Link></div>

                        </form>

                        </div>
                </div>
            </div>

            <div className = {(all  ? " actual " : " demo ")}>
                <p className={"data"}>First Name: {first}</p>
                <p className={"data"}>Last Name: {last}</p>
                <p className={"data"}>Email: {email}</p>
                <p className={"data"}>Password: {pass1}</p>
            </div>
            <Footer />
        </div>
                        )
}

export default SignUp
