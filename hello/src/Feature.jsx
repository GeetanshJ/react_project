import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import img4 from './assets/feature_fig1.jpg';
import img5 from './assets/feature_fig2.jpg';
import img6 from './assets/feature_fig3.jpg';
import img7 from './assets/feature_fig4.jpg';
import '../src/App.css';

const Features = () => {
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
                <p class="features-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsa amet
                    veniam, unde consequuntur voluptate sunt error inventore corporis deserunt voluptatibus porro delectus
                    consectetur ad nemo maxime odit doloremque vel, mollitia adipisci. Nisi, voluptates. Culpa modi iste
                    quos autem aspernatur.</p>

                <button class="features-btn">READ MORE</button>
            </div>

        </div>
        <Footer/>
        </div>
    )
}

export default Features
