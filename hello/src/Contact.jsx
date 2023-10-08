import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Contact = () => {
    const[first,SetFirst] = useState("")
    const[last,SetLast] = useState("")
    const[email,SetEmail] = useState("")
    const[phone,SetPhone] = useState("")
    const[mind,SetMind] = useState("")
    

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
        <Header path="contacts"/>
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
                                <p class="text-blk contactus-subhead">
                                    Nunc erat cursus tellus gravida.
                                </p>
                                <div class="responsive-container-block">
                                    <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                                        <p class="text-blk input-title">
                                            FIRST NAME*
                                        </p>
                                        <input class="input" type="text" onChange={(e) => {SetFirst(e.target.value)}} value={first} id="ijowk" name="FirstName" required placeholder="Please enter first name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            LAST NAME*
                                        </p>
                                        <input class="input" type="text" id="indfi" onChange={(e) => {SetLast(e.target.value)}} value={last} name="Last Name" required placeholder="Please enter last name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL*
                                        </p>
                                        <input class="input" type="email" id="ipmgh" onChange={(e) => {SetEmail(e.target.value)}} value={email} name="Email"  required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PHONE NUMBER*
                                        </p>
                                        <input class="input" type = "number"id="imgis" onChange={(e) => {SetPhone(e.target.value)}} value={phone} name="PhoneNumber" required placeholder="Please enter phone number..." />
                                    </div>
                                    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                                        <p class="text-blk input-title">
                                            WHAT DO YOU HAVE IN MIND*
                                        </p>
                                        <textarea class="textinput" onChange={(e) => {SetMind(e.target.value)}} value={mind} id="i5vyy" required placeholder="Please enter query..."></textarea>
                                    </div>
                                </div>
                                <button class="submit-btn" onClick={Contact}>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
