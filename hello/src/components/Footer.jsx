import React from 'react'

const Footer = () => {
    return (
        <div>
            <div class="touch-1" id="contact-div">
            <div class="touch-h1">GetinTouch</div>
            <div class="touch-logos">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                <i class="fa fa-google-wallet" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-digg" aria-hidden="true"></i>
            </div>
        </div>


        <footer class="footer">
            <div class="footer-container">
                <div class="footer-text"><a href="mailto:jaingeetansh@gmail.com">Email Us</a></div>
                <div class="footer-logo"><i class="fa fa-envelope-o" aria-hidden="true" aria-required></i></div>
            </div>

            <div class="footer-container">
                <div class="footer-text"><a href="tel:+917082722250">Call Us</a></div>
                <div class="footer-logo"><i class="fa fa-phone" aria-hidden="true"></i></div>
            </div>

            <div class="footer-container">
                <div class="footer-text">Address:123 model town</div>
                <div class="footer-logo"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
            </div>
        </footer>


        <p>Designed By Geetansh Jain 2110990513</p>

        </div>
    )
}

export default Footer
