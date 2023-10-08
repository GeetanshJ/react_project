import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import img20 from "./assets/offer.jpg";
const Offers = () => {
    return (
        <div>
            <Header path="offer" />
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
                        <div class="p-btn-container">
                            <button class="p-btn">Read More</button>
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

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "7rem",
                    flexWrap: "wrap",
                }}
            >
                <img src={img20} />
                <span
                    style={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        padding: "2rem",
                        fontFamily: "cursive",
                    }}
                >
                    20% disscount only for first 100 users
                </span>
            </div>
            <Footer />
        </div>
    );
};

export default Offers;
