import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import img20 from "./assets/offer.jpg";
const Offers = () => {
    return (
        <div>
            <Header path="offer" />
            

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
