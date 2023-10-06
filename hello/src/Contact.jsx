import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Contact = () => {
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
                                            FIRST NAME
                                        </p>
                                        <input class="input" id="ijowk" name="FirstName" required placeholder="Please enter first name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            LAST NAME
                                        </p>
                                        <input class="input" id="indfi" name="Last Name" required placeholder="Please enter last name..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            EMAIL
                                        </p>
                                        <input class="input" id="ipmgh" name="Email"  required placeholder="Please enter email..." />
                                    </div>
                                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <p class="text-blk input-title">
                                            PHONE NUMBER
                                        </p>
                                        <input class="input" id="imgis" name="PhoneNumber" required placeholder="Please enter phone number..." />
                                    </div>
                                    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                                        <p class="text-blk input-title">
                                            WHAT DO YOU HAVE IN MIND
                                        </p>
                                        <textarea class="textinput" id="i5vyy" required placeholder="Please enter query..."></textarea>
                                    </div>
                                </div>
                                <button class="submit-btn">
                                    Submit
                                </button>
                            </div>
                            <div class="social-media-links">
                                <a href="#" id="ix94i-2">
                                </a>
                                <a href="#">
                                </a>
                                <a href="#">
                                </a>
                                <a href="#" id="izldf-2">
                                </a>
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
