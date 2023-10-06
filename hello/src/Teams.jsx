import React from 'react'
import '../src/App.css';
import Header from './components/Header'
import img10 from './assets/team_fig1.jpg';
import img11 from './assets/team_fig2.jpg';
import img12 from './assets/team_fig3.jpg';
import img13 from './assets/team_fig4.jpg';
import img14 from './assets/team_fig5.jpg';
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

        <Footer/>
        </div>
    )
}

export default Teams
