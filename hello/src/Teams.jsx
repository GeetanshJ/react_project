import React from 'react'
import '../src/App.css';
import Header from './components/Header'
import img10 from './assets/team_fig1.jpg';
import img11 from './assets/team_fig2.jpg';
import img12 from './assets/team_fig3.jpg';
import img13 from './assets/team_fig4.jpg';
import img14 from './assets/team_fig5.jpg';
import img1 from './assets/header_fig1.png';
import img2 from './assets/header_fig2.jpg';
import img3 from './assets/header_fig3.jpg';
import Footer from './components/Footer';
const Teams = () => {
    return (
        <div>
            <Header path="teams"/>

            <div class="teams" id="team-div">
            <div class="teams-h1">We are Perfect Teams</div>
            <div class="teams-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos assumenda consequatur
                repellendus tempore nemo facere quae, ad, cupiditate molestias vel in. Odio doloribus assumenda voluptate
                rerum nostrum esse, cum earum sunt, blanditiis in eos quo eaque placeat
            </div>

            <div class="teams-container">

            </div>

            <div class="team-member-container">

                <div class="teams-members">
                    <img src={img10} alt="img" />
                    <div class="team-name">Jeff Nortan</div>
                    <div class="team-role">Graphic Designer</div>
                </div>

                <div class="teams-members">
                    <img src={img11} alt="img" />
                    <div class="team-name">Anita Allen</div>
                    <div class="team-role">Graphic Designer</div>
                </div>

                <div class="teams-members">
                    <img src={img12} alt="img" />
                    <div class="team-name">Jeff Nortan</div>
                    <div class="team-role">Graphic Designer</div>
                </div>

                <div class="teams-members">
                    <img src={img13} alt="img" />
                    <div class="team-name">Anita Allen</div>
                    <div class="team-role">Graphic Designer</div>
                </div>

                <div class="teams-members">
                    <img src={img14} alt="img" />
                    <div class="team-name">Jeff Nortan</div>
                    <div class="team-role">Graphic Designer</div>
                </div>

            </div>

        </div>



        <section id="fact-div">
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

export default Teams
