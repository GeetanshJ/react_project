import React, { useRef, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const Contact = () => {
    const[first,SetFirst] = useState("")
    const[last,SetLast] = useState("")
    const[email,SetEmail] = useState("")
    const[phone,SetPhone] = useState("")
    const[mind,SetMind] = useState("")
    const[all,setAll] = useState(false)
    const[show_text,setShow] = useState("SHOW DATA")

    const first_ref = useRef();
    const last_ref = useRef();
    const email_ref = useRef();
    const phone_ref = useRef();
    const mind_ref = useRef();

    const handleRef = () => {
        SetFirst(first_ref.current.value);

        SetLast(last_ref.current.value);

        SetEmail(email_ref.current.value);

        SetPhone(phone_ref.current.value);

        SetMind(mind_ref.current.value);
    };

    function showed(){


        handleRef();
        if(show_text === "SHOW DATA" && all === false){
            setShow("HIDE DATA");
            setAll(true);
        }

        else{
            setShow("SHOW DATA");
            setAll(false);
        }

    }
    
    function Contact(){
        if(first === ""){
            alert("Enter First name")
        }

        else if(last === ""){
            alert("Enter Last name")
        }

        else if(email === ""){
            alert("Enter email")
        }

        else if(phone === ""){
            alert("Enter phone number")
        }

        else if(mind === ""){
            alert("What do you have in mind")
        }

        else{
            alert("We will contact you on " + phone + " Thank you for contacting us")
        }
    }
    return (
        <div>
        <Header path="contact"/>
            <div class="contact_us_2">
                <div class="responsive-container-block big-container">
                    <div class="blueBG">
                    </div>
                    <div class="responsive-container-block container">
                        <form class="form-box">
                            <div class="container-block form-wrapper">
                                <p class="text-blk contactus-head">
                                    Get in Touch
                                </p>

                                <div class="responsive-container-block">
                                    <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                                        <p class="text-blk input-title">
                                            FIRST NAME*
                                        </p>
                                        <input class="input" type="text"   id="ijowk" ref={first_ref} name="FirstName" required placeholder="Please enter first name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            LAST NAME*
                                        </p>
                                        <input class="input" type="text" id="indfi" ref={last_ref} name="Last Name" required placeholder="Please enter last name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL*
                                        </p>
                                        <input class="input" type="email" id="ipmgh"ref={email_ref} name="Email"  required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PHONE NUMBER*
                                        </p>
                                        <input class="input" type = "number"id="imgis"ref={phone_ref} name="PhoneNumber" required placeholder="Please enter phone number..." />
                                    </div>
                                    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                                        <p class="text-blk input-title">
                                            WHAT DO YOU HAVE IN MIND*
                                        </p>
                                        <textarea class="textinput"ref={mind_ref} id="i5vyy" required placeholder="Please enter query..."></textarea>
                                    </div>
                                </div>

                                <div class="submit-btn1" onClick={showed} onChange={handleRef} >
                                    {show_text}
                                </div>
                                <button class="submit-btn" onClick={Contact}>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <div className="actual_p">
            <div className = {(all  ? " actual " : " demo ")}>
                        <p className={"data"}>First Name: {first}</p>
                        <p className={"data"}>Last Name: {last}</p>
                        <p className={"data"}>Email: {email}</p>
                        <p className={"data"}>Phone Number: {phone}</p>
                        <p className={"data"}>Query: {mind}</p>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
