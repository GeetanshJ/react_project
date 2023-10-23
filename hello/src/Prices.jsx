import React, { useState} from "react";
import Header from './components/Header'
import Footer from './components/Footer'

const Prices = () => {




    
    const [proff_read, setProffRead] = useState("READ MORE");
    const [proff_text, setProffText] = useState(false);
    function proffessionals() {
        if (proff_read === "READ MORE") {
            setProffRead("READ LESS");
            setProffText(true);
        }
        
        else {
            setProffRead("READ MORE");
            setProffText(false);
        }
    }
    return (
        <div>
            <Header path="prices"/>
            <div class="proffesional" id="pricing-div">
                <div class="proffesional-1"></div>
                <div class="proffesional-2">
                    <div class="proffesional-2-1">
                        <span class="p-heading">
                            <h1>Professional</h1>
                            <p>Website Design</p>
                        </span>

                        <span class="p-price">
                            <p>
                                $<span>49</span>.99
                            </p>
                        </span>

                        <span class="p-overview">
                            <h2>Overview</h2>
                            <p
                                style={{
                                    fontFamily: "arial",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                                nihil veritatis accusamus eveniet odio temporibus dolores
                                aspernatur.
                            </p>
                        </span>
                    </div>
                    <div class="proffesional-2-2">
                        <div class="p-heading2">
                            <h1>Our Best</h1>
                            <p>Feature</p>
                        </div>
                        <ul class="p-list">
                            <li>Lorem ipsum dolor sitr</li>
                            <li>Lorem ipsum dolor sitr</li>
                            <li>voluptatem ratione</li>
                            <li>ad odio architecto quis</li>
                            <li>esse inventore! Non</li>
                            <li>quae, reprehenderit odit amet!</li>
                        </ul>

                        <ul className={
                            "prof_more_header " +
                            (proff_text ? "prof_active_header" : "")
                        }>
                            <li>Lorem ipsum dolor sitr</li>
                            <li>ad odio architecto quis</li>
                            <li>esse inventore! Non</li>
                            <li>quae, reprehenderit odit amet!</li>
                        </ul>
                        <div class="p-btn-container">
                            <button class="p-btn"onClick={proffessionals}>
                        {proff_read}</button>
                        </div>
                    </div>
                </div>
                <div class="proffesional-3">
                    <div class="p3-container">
                        <h1 class="p3-h1">Take Your Website To The Next Level</h1>
                        <p class="p3-p1">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                            commodi doloribus modi facilis maxime error quo architecto,
                            eveniet quod sit animi molestiae veniam, delectus, magni incidunt
                            minima cumque distinctio dicta!
                        </p>
                        <p class="p3-p2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                            veniam minima fugiat nisi commodi, recusandae minus dolores
                            ducimus aliquid accusantium eius molestias voluptatibus hic et
                            nobis a cupiditate voluptate amet.
                        </p>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
    )
}

export default Prices
