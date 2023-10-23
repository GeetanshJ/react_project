import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/App.css";
import img8 from "./assets/A.png";
import img4 from "./assets/feature_fig1.jpg";
import img5 from "./assets/feature_fig2.jpg";
import img6 from "./assets/feature_fig3.jpg";
import img7 from "./assets/feature_fig4.jpg";
import img1 from "./assets/header_fig1.png";
import img2 from "./assets/header_fig2.jpg";
import img3 from "./assets/header_fig3.jpg";
import img15 from "./assets/member_fig1.jpg";
import img9 from "./assets/service_fig1.jpg";
import img10 from "./assets/team_fig1.jpg";
import img11 from "./assets/team_fig2.jpg";
import img12 from "./assets/team_fig3.jpg";
import img13 from "./assets/team_fig4.jpg";
import img14 from "./assets/team_fig5.jpg";

const Home = () => {
    const [ham, setHam] = useState(false);

    function handleHam() {
        if (ham === true) {
            setHam(false);
        } else {
            setHam(true);
        }
    }

    const [read, setReadMore] = useState(false);
    const [text, setText] = useState("READ MORE");
    function readMore() {
        if (read === true) {
            setReadMore(false);
        } else if (read === false) {
            setReadMore(true);
        }

        if (text === "READ MORE") {
            setText("READ LESS");
        } else if (text === "READ LESS") {
            setText("READ MORE");
        }
    }

    const [header_text, setHeaderText] = useState("READ MORE");
    const [read_head, setHeaderReadText] = useState(false);
    function header_read() {
        if (header_text === "READ MORE") {
            setHeaderText("READ LESS");
            setHeaderReadText(true);
        } else {
            setHeaderText("READ MORE");
            setHeaderReadText(false);
        }
    }

    const [header_text1, setHeaderText1] = useState("READ MORE");
    const [read_head1, setHeaderReadText1] = useState(false);
    function header_read1() {
        if (header_text1 === "READ MORE") {
            setHeaderText1("READ LESS");
            setHeaderReadText1(true);
        } else {
            setHeaderText1("READ MORE");
            setHeaderReadText1(false);
        }
    }

    const [header_text2, setHeaderText2] = useState("READ MORE");
    const [read_head2, setHeaderReadText2] = useState(false);
    function header_read2() {
        if (header_text2 === "READ MORE") {
            setHeaderText2("READ LESS");
            setHeaderReadText2(true);
        } else {
            setHeaderText2("READ MORE");
            setHeaderReadText2(false);
        }
    }

    const [read_more_creative, setCreativeRead] = useState("READ MORE");
    const [text_creative, setCreativeText] = useState(false);
    function creative() {
        if (read_more_creative === "READ MORE") {
            setCreativeRead("READ LESS");
            setCreativeText(true);
        } else {
            setCreativeRead("READ MORE");
            setCreativeText(false);
        }
    }

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
    

    const [price_read, setPriceRead] = useState("READ MORE");
    const [price, setPriceText] = useState(false);
    function prices() {
        if (price_read === "READ MORE") {
            setPriceRead("READ LESS");
            setPriceText(true);
        }
        
        else {
            setPriceRead("READ MORE");
            setPriceText(false);
        }
    }

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
            <header id="project-div" class="header-1">
                <div class="nav-bar">
                    <div class="logo">digital</div>

                    <div class="nav-bar-ham" onClick={handleHam}>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <ul className={"listing " + (ham ? "active" : "")}>
                        <li>
                            <Link to="feature">FEATURES</Link>
                        </li>
                        <li>
                            <Link to="offer">OFFER</Link>
                        </li>
                        <li>
                            <Link to="prices">PRICING</Link>
                        </li>
                        <li>
                            <Link to="clients">CLIENTS</Link>
                        </li>
                        <li>
                            <Link to="facts">FACTS</Link>
                        </li>
                        <li>
                            <Link to="project">PROJECTS</Link>
                        </li>
                        <li>
                            <Link to="teams">TEAMS</Link>
                        </li>
                        <li>
                            <Link to="contact">CONTACTS</Link>
                        </li>
                        <li>
                            <Link to="signup">SIGNUP</Link>
                        </li>
                        <li>
                            <Link to="login">LOGIN</Link>
                        </li>
                    </ul>
                </div>

                <h1>Simply the Best</h1>
                <p>Reasons for Choosing Us</p>
                <div class="content-header">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                    dolores?
                </div>
                <div class="content-header-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                    dolores?
                </div>

                <button className="btn" onClick={readMore}>
                    {text}
                </button>
                <div className={"read_more " + (read ? "read_active" : "")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    reiciendis itaque sapiente odit recusandae modi in! Aperiam commodi
                    itaque laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Officiis reiciendis itaque sapiente odit recusandae modi in!
                    Aperiam commodi itaque laboriosam! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Officiis reiciendis itaque sapiente odit
                    recusandae modi in! Aperiam commodi itaque laboriosam! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                    itaque sapiente odit recusandae modi in! Aperiam commodi itaque
                    laboriosam!
                </div>
            </header>



















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

                        <div
                            className={
                                "read_more_header " + (read_head ? "read_active_header" : "")
                            }
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                            reiciendis itaque sapiente odit recusandae modi in! Aperiam
                            commodi itaque laboriosam! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Officiis reiciendis itaque sapiente odit
                            recusandae modi in! Aperiam commodi itaque laboriosam! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                            itaque sapiente odit recusandae modi in! Aperiam commodi itaque
                            laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis reiciendis itaque sapiente odit recusandae modi in!
                            Aperiam commodi itaque laboriosam!
                        </div>
                        <button class="header-fig-btn" onClick={header_read}>
                            {header_text}
                        </button>
                    </div>


                    <div class="header-fig-container">
                        <img src={img2} alt="img" />
                        <h3>Trusted by Leaders</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head1 ? "read_active_header" : "")
                            }
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                            reiciendis itaque sapiente odit recusandae modi in! Aperiam
                            commodi itaque laboriosam! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Officiis reiciendis itaque sapiente odit
                            recusandae modi in! Aperiam commodi itaque laboriosam! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                            itaque sapiente odit recusandae modi in! Aperiam commodi itaque
                            laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis reiciendis itaque sapiente odit recusandae modi in!
                            Aperiam commodi itaque laboriosam!
                        </div>
                        <button class="header-fig-btn" onClick={header_read1}>
                            {header_text1}
                        </button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img3} alt="img" />
                        <h3>Brand Equity</h3>
                        <div class="header-fig-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Necessitatibus esse pariatur, nisi libero recusandae cupiditate
                            natus neque ullam dolorem aut. hello ji
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head2 ? "read_active_header" : "")
                            }
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                            reiciendis itaque sapiente odit recusandae modi in! Aperiam
                            commodi itaque laboriosam! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Officiis reiciendis itaque sapiente odit
                            recusandae modi in! Aperiam commodi itaque laboriosam! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Officiis reiciendis
                            itaque sapiente odit recusandae modi in! Aperiam commodi itaque
                            laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis reiciendis itaque sapiente odit recusandae modi in!
                            Aperiam commodi itaque laboriosam!
                        </div>
                        <button class="header-fig-btn" onClick={header_read2}>
                            {header_text2}
                        </button>
                    </div>
                </div>
            </section>



















            <section>
                <div class="about-us-container">
                    <p class="about-us-h1">We are Creative Agency</p>
                    <p class="about-us-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                        quae, minima, qui alias quo eius, blanditiis natus in ut optio
                        soluta eum repellat sapiente praesentium. Minima quas voluptates
                        eveniet suscipit nihil atque laboriosam iusto? Minima officia
                        doloribus qui odio aliquid at quae consequatur quidem iste
                        blanditiis? Optio totam doloribus, sunt inventore blanditiis
                        similique accusamus saepe voluptatibus earum iste, maxime, voluptate
                        placeat harum! Voluptatum assumenda laudantium magni ipsam amet aut
                        sunt?
                    </p>

                    <div
                        className={
                            "creative_more_header " +
                            (text_creative ? "creative_active_header" : "")
                        }
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        quae praesentium aut ipsum, quod vitae fugiat tempora debitis
                        consequatur. Asperiores nulla provident harum ex ipsum corrupti,
                        odit rem sapiente facilis consectetur suscipit odio iure, rerum
                        ipsa! Placeat sit facilis perspiciatis optio voluptatibus,
                        laboriosam temporibus illum, nulla mollitia sint repudiandae? Fugit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        quae praesentium aut ipsum, quod vitae fugiat tempora debitis
                        consequatur. Asperiores nulla provident harum ex ipsum corrupti,
                        odit rem sapiente facilis consectetur suscipit odio iure, rerum
                        ipsa! Placeat sit facilis perspiciatis optio voluptatibus,
                        laboriosam temporibus illum, nulla mollitia sint repudiandae? Fugit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        quae praesentium aut ipsum, quod vitae fugiat tempora debitis
                        consequatur. Asperiores nulla provident harum ex ipsum corrupti,
                        odit rem sapiente facilis consectetur suscipit odio iure, rerum
                        ipsa! Placeat sit facilis perspiciatis optio voluptatibus,
                        laboriosam temporibus illum, nulla mollitia sint repudiandae? Fugit?
                    </div>
                    <button class="about-us-btn" onClick={creative}>
                        {read_more_creative}
                    </button>
                </div>

                <div class="about-us-container">
                    <img src={img8} alt="img" />
                </div>

                <div class="about-us-container">
                    <p class="about-us-h2">''</p>

                    <p class="about-us-text2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                        quae, minima, qui alias quo eius, blanditiis natus in ut optio
                        soluta eum repellat sapiente praesentium. Minima quas voluptates
                        eveniet suscipit nihil atque laboriosam iusto? Minima officia
                        doloribus qui odio aliquid at quae consequatur quidem iste
                        blanditiis? Optio totam doloribus, sunt inventore blanditiis
                        similique accusamus saepe voluptatibus earum iste, maxime, voluptate
                        placeat harum! Voluptatum assumenda laudantium magni ipsam amet aut
                        sunt?
                    </p>

                    <p class="about-us-h1">Geetansh Jain</p>
                </div>
            </section>















            <section class="features" id="feature-div">
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
            </section>












            <div class="serve" id="offer-div">
                <div class="serve-container1">
                    <h3 class="services-h3">Services We Provide</h3>
                    <div class="services-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                        eveniet et nemo omnis voluptatibus similique, magni repellat
                        voluptas repellendus enim recusandae minus aperiam velit saepe
                        aliquid ipsa sit. Impedit numquam, officia perferendis facere
                        architecto eligendi praesentium incidunt dolorum voluptatibus et
                        velit ad atque deleniti, amet recusandae voluptatem! Aperiam sit
                        blanditiis, nisi eaque es
                    </div>

                    <div  className={"price_read_class " + (price ? " price_active" : "")}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                        corporis, deserunt repellendus, veritatis quasi voluptates
                        consequuntur voluptatem tempore nisi suscipit vitae ab? Nesciunt
                        impedit omnis voluptate soluta ullam exercitationem repellendus est
                        natus
                    </div>
                    <button class="services-btn" onClick={prices}>{price_read}</button>
                </div>

                <div class="serve-container2">
                    <img src={img9} alt="img" />
                </div>

                <div class="logo-six">
                    <div class="left-side">
                        <div class="logo-branding">
                            <i class="fa fa-flag-o" aria-hidden="true"></i>
                            <div>Logo and Branding</div>
                        </div>
                        <div class="logo-branding">
                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                            <div>Digital Products</div>
                        </div>
                        <div class="logo-branding">
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                            <div>Loremipsum dolor</div>
                        </div>
                    </div>

                    <div class="right-side">
                        <div class="logo-branding">
                            <i class="fa fa-television" aria-hidden="true"></i>
                            <div>Social Media Branding</div>
                        </div>
                        <div class="logo-branding">
                            <i class="fa fa-flag-o" aria-hidden="true"></i>
                            <div>Logo and Branding</div>
                        </div>
                        <div class="logo-branding">
                            <i class="fa fa-share-alt-square" aria-hidden="true"></i>
                            <div>Mobile and Web</div>
                        </div>
                    </div>
                </div>
            </div>









            <div class="teams" id="team-div">
                <div class="teams-h1">We are Perfect Teams</div>
                <div class="teams-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                    assumenda consequatur repellendus tempore nemo facere quae, ad,
                    cupiditate molestias vel in. Odio doloribus assumenda voluptate rerum
                    nostrum esse, cum earum sunt, blanditiis in eos quo eaque placeat
                </div>

                <div class="teams-container"></div>

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






            <div class="member" id="client-div">
                <div class="member-container1">
                    <h2 class="member-container1-h2">Anita Allen</h2>
                    <h3 class="member-container1-h3">Graphic Designer</h3>
                    <div class="member-container1-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                        distinctio magni magnam quae, saepe doloremque fugit ipsum vero
                        quaerat, nam incidunt, sunt repudiandae corrupti cupiditate! Laborum
                        quisquam esse, dolores, excepturi facere perferendis tempore est
                        velit sed, mollitia similique impedit ex qui exercitationem cumque?
                        Asperiores illo expedita totam atque incidunt eum!.
                    </div>

                    <div class="member-ranges">
                        <div class="member-ranges-text">Creativity</div>
                        <span class="member-ranges-bar"></span>
                        <span class="member-ranges-text1">80%</span>
                        <div class="member-ranges-bar1"></div>
                    </div>

                    <div class="member-ranges">
                        <div class="member-ranges-text">Team Work</div>
                        <span class="member-ranges-bar"></span>
                        <span class="member-ranges-text1">80%</span>
                        <div class="member-ranges-bar1"></div>
                    </div>

                    <div class="member-ranges">
                        <div class="member-ranges-text">Desiging</div>
                        <span class="member-ranges-bar"></span>
                        <span class="member-ranges-text1">80%</span>
                        <div class="member-ranges-bar1"></div>
                    </div>
                </div>

                <div class="member-container2">
                    <img src={img15} alt="img" />
                </div>

                <div class="member-container3">
                    <div class="member-container3-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                        dolor eos eius blanditiis odit quia maiores ut ipsum at odio.
                    </div>
                    <div class="member-container3-logos">
                    <a href="https://www.facebook.com/Geetansh_Jain" style={{color:"white"}} target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.google.com" style={{color:"white"}} target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                        <a href="https://www.google.com/" style={{color:"white"}} target="_blank"><i class="fa fa-google-wallet" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>







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
                            <li>Lorem ipsum dolor sitr</li>
                            <li>voluptatem ratione</li>
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










            <div>
                <div class="touch" id="contact-div">
                    <div class="touch-h1">GetinTouch</div>
                    <div class="touch-logos">
                        <a href="https://www.facebook.com/Geetansh_Jain" style={{color:"white"}} target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.google.com" style={{color:"white"}} target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                        <a href="https://www.google.com/" style={{color:"white"}} target="_blank"><i class="fa fa-google-wallet" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/" style={{color:"white"}} target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/geetansh-jain-81995322a/" style={{color:"white"}} target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://digg.com/" style={{color:"white"}} target="_blank"><i class="fa fa-digg" aria-hidden="true"></i></a>
                    </div>
                </div>

                <footer class="footer">
                    <div class="footer-container">
                        <div class="footer-text">
                            <a href="mailto:jaingeetansh@gmail.com">Email Us</a>
                        </div>
                        <div class="footer-logo">
                            <i class="fa fa-envelope-o" aria-hidden="true" aria-required></i>
                        </div>
                    </div>

                    <div class="footer-container">
                        <div class="footer-text">
                            <a href="tel:+917082722250">Call Us</a>
                        </div>
                        <div class="footer-logo">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div class="footer-container">
                        <div class="footer-text">Address:123 model town</div>
                        <div class="footer-logo">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                    </div>
                </footer>

                <p>Designed By Geetansh Jain 2110990513</p>
            </div>
        </div>
    );
};

export default Home;
