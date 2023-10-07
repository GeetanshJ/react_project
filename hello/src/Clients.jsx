import React from 'react';
import '../src/App.css';
import img1 from './assets/header_fig1.png';
import img2 from './assets/header_fig2.jpg';
import img3 from './assets/header_fig3.jpg';
import Footer from './components/Footer';
import Header from './components/Header';

const Clients = () => {
    return (
        <div>
            <Header path="clients"/>
            <section id="fact-div" className="bg-red-500">
                <div class="header-fig">
                    <div class="header-fig-container">
                        <img src={img1} alt="img" />
                        <h3>Best TrackRecord</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img2} alt="img2" />
                        <h3>Trusted by Leaders</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img3} alt="img3" />
                        <h3>Brand Equity</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Clients
