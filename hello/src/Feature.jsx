import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import img4 from './assets/feature_fig1.jpg';
import img5 from './assets/feature_fig2.jpg';
import img6 from './assets/feature_fig3.jpg';
import img7 from './assets/feature_fig4.jpg';
import '../src/App.css';

const Features = () => {
    const [features_read, setFeatureRead] = useState("READ MORE");
    const [feat, setFeatureText] = useState(false);
    function Features() {
        if (features_read === "READ MORE") {
            setFeatureRead("READ LESS");
            setFeatureText(true);
        } else {
            setFeatureRead("READ MORE");
            setFeatureText(false);
        }
    }
    return (
        <div>
        <Header path = "feature"/>
        <div class="features" id="feature-div">
            <div class="feature-div">
                <img src={img4} alt="img" />
                <img src={img5} alt="img" />
            </div>

            <div class="feature-div">
                <img src={img6} alt="img" />
                <img src={img7} alt="img" />
            </div>

            <div class="features-amazingFeatures">
                    <h3 class="features-h1">Amazing Features</h3>
                    <p class="features-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                        ipsa amet veniam, unde consequuntur voluptate sunt error inventore
                        corporis deserunt voluptatibus porro delectus consectetur ad nemo
                        maxime odit doloremque vel, mollitia adipisci. Nisi, voluptates.
                        Culpa modi iste quos autem aspernatur.
                    </p>

                    <div
                        className={"feature_read_class" + (feat ? " feature_active" : "")}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
                        ipsum temporibus veniam rem molestias consequatur doloribus est
                        sapiente, harum alias pariatur provident voluptate doloremque.
                        Quibusdam consectetur quos minima? Perferendis sed reprehenderit
                        tenetur placeat nobis voluptatem eius ipsum totam? Illo inventore ex
                        pariatur possimus, sapiente provident explicabo nobis tempore, iure
                        fuga ab totam nam ea. Velit, ad. Dicta dolore ut error deleniti
                        nostrum maxime dignissimos cumque! Quas, commodi suscipit fugit
                        laudantium perferendis voluptate cumque modi ipsum et deserunt
                        quaerat repudiandae possimus porro nihil, sit ut? Harum delectus
                        accusantium dolorem quos error beatae optio, nemo alias nostrum
                        rerum doloribus sed atque.
                    </div>

                    <button class="features-btn" onClick={Features}>
                        {features_read}
                    </button>
                </div>

        </div>
        <Footer/>
        </div>
    )
}

export default Features
