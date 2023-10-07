import React from 'react'
import Footer from './components/Footer';
import img9 from './assets/service_fig1.jpg';
import '../src/App.css';
import Header from './components/Header';
import img1 from './assets/header_fig1.png';
import img2 from './assets/header_fig2.jpg';
import img3 from './assets/header_fig3.jpg';
const Project = () => {
    return (
        <div>
            <Header path="project"/>
            <div class="serve" id="offer-div">
                <div class="serve-container1">
                    <h3 class="services-h3">Services We Provide</h3>
                    <div class="services-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eveniet et nemo
                        omnis voluptatibus similique, magni repellat voluptas repellendus enim recusandae minus aperiam velit
                        saepe aliquid ipsa sit. Impedit numquam, officia perferendis facere architecto eligendi praesentium
                        incidunt dolorum voluptatibus et velit ad atque deleniti, amet recusandae voluptatem! Aperiam sit
                        blanditiis, nisi eaque es
                    </div>
                    <button class="services-btn">READ MORE</button>
                </div>

                <div class="serve-container2">
                    <img src={img9} alt="img" />
                </div>


                <div class="logo-six">
                    <div class="left-side">
                        <div class="logo-branding"><i class="fa fa-flag-o" aria-hidden="true"></i>
                            <div>Logo and Branding</div>
                        </div>
                        <div class="logo-branding"><i class="fa fa-phone-square" aria-hidden="true"></i>
                            <div>Digital Products</div>
                        </div>
                        <div class="logo-branding"><i class="fa fa-line-chart" aria-hidden="true"></i>
                            <div>Loremipsum dolor</div>
                        </div>
                    </div>

                    <div class="right-side">
                        <div class="logo-branding"><i class="fa fa-television" aria-hidden="true"></i>
                            <div>Social Media Branding</div>
                        </div>
                        <div class="logo-branding"><i class="fa fa-flag-o" aria-hidden="true"></i>
                            <div>Logo and Branding</div>
                        </div>
                        <div class="logo-branding"><i class="fa fa-share-alt-square" aria-hidden="true"></i>
                            <div>Mobile and Web</div>
                        </div>
                    </div>
                </div>
            </div>



            <section id="fact-div">
                <div class="header-fig">
                    <div class="header-fig-container">
                        <img src={img1} alt="img" />
                        <h3>Project 1</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img2} alt="img2" />
                        <h3>Project 2</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img3} alt="img3" />
                        <h3>Project 3</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img3} alt="img3" />
                        <h3>Project 4</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img1} alt="img3" />
                        <h3>Project 5</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img2} alt="img3" />
                        <h3>Project 6</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img1} alt="img3" />
                        <h3>Project 7</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>
                        <button class="header-fig-btn">READ MORE</button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img2} alt="img3" />
                        <h3>Project 8</h3>
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

export default Project
