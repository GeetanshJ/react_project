import React, { useState } from "react";
import Footer from "./components/Footer";
import img9 from "./assets/service_fig1.jpg";
import "../src/App.css";
import Header from "./components/Header";
import img1 from "./assets/header_fig1.png";
import img2 from "./assets/header_fig2.jpg";
import img3 from "./assets/header_fig3.jpg";
const Project = () => {
    const [price_read, setPriceRead] = useState("READ MORE");
    const [price, setPriceText] = useState(false);
    function prices() {
        if (price_read === "READ MORE") {
            setPriceRead("READ LESS");
            setPriceText(true);
        } else {
            setPriceRead("READ MORE");
            setPriceText(false);
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
    return (
        <div>
            <Header path="project" />
            <div class="serve" id="offer-div">
                <div class="serve-container1">
                    <h3 class="services-h3">Services We Provide</h3>
                    <div class="services-text">
                        Web Development and Design: We specialize in creating captivating
                        and functional websites tailored to your brand's identity. Our web
                        development and design services encompass everything from
                        user-friendly interfaces to responsive design, ensuring a seamless
                        and engaging online presence for your business.
                    </div>

                    <div className={"price_read_class " + (price ? " price_active" : "")}>
                        Web Development and Design: We specialize in creating captivating
                        and functional websites tailored to your brand's identity. Digital
                        Marketing: Our digital marketing services are designed to boost your
                        online visibility and reach your target audience effectively. From
                        search engine optimization (SEO) and social media management to
                        pay-per-click (PPC) advertising, we offer a comprehensive range of
                        digital marketing strategies to drive traffic and conversions.
                    </div>
                    <button class="services-btn" onClick={prices}>
                        {price_read}
                    </button>
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

            <section id="fact-div">
                <div class="header-fig">
                    <div class="header-fig-container">
                        <img src={img1} alt="img" />
                        <h3>Project 1</h3>
                        <div class="header-fig-text">
                            Project Scope and Objectives: Begin by outlining the scope of the
                            project, which involves defining the project's boundaries and what
                            it aims to achieve. Clearly state the project's objectives,
                            including specific goals, deliverables, and desired outcomes.
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head ? "read_active_header" : "")
                            }
                        >
                            Project Scope and Objectives: Begin by outlining the scope of the
                            project, which involves defining the project's boundaries and what
                            it aims to achieve. Clearly state the project's objectives,
                            including specific goals, deliverables, and desired outcomes.
                            Project Timeline and Milestones: Provide a timeline that details
                            the project's schedule, including key milestones and deadlines.
                            Break down the project into manageable phases, indicating when
                            each phase is expected to start and finish. This helps in tracking
                            progress and ensuring that the project stays on schedule. Resource
                            Allocation and Responsibilities: Specify the resources required
                            for the project, such as personnel, equipment, and budget. Clearly
                            define the roles and responsibilities of team members, including
                            project managers, stakeholders, and any subcontractors or
                            partners. This ensures that everyone knows their tasks and
                            accountabilities throughout the project's lifecycle.
                        </div>
                        <button class="header-fig-btn" onClick={header_read}>
                            {header_text}
                        </button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img2} alt="img" />
                        <h3>Project 2</h3>
                        <div class="header-fig-text">
                        Project Scope and Objectives: Begin by outlining the scope of the
                            project, which involves defining the project's boundaries and what
                            it aims to achieve. Clearly state the project's objectives,
                            including specific goals, deliverables, and desired outcomes.
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head1 ? "read_active_header" : "")
                            }
                        >
                            Project Scope and Objectives: Begin by outlining the scope of the
                            project, which involves defining the project's boundaries and what
                            it aims to achieve. Clearly state the project's objectives,
                            including specific goals, deliverables, and desired outcomes.
                            Project Timeline and Milestones: Provide a timeline that details
                            the project's schedule, including key milestones and deadlines.
                            Break down the project into manageable phases, indicating when
                            each phase is expected to start and finish. This helps in tracking
                            progress and ensuring that the project stays on schedule. Resource
                            Allocation and Responsibilities: Specify the resources required
                            for the project, such as personnel, equipment, and budget. Clearly
                            define the roles and responsibilities of team members, including
                            project managers, stakeholders, and any subcontractors or
                            partners. This ensures that everyone knows their tasks and
                            accountabilities throughout the project's lifecycle.
                        </div>
                        <button class="header-fig-btn" onClick={header_read1}>
                            {header_text1}
                        </button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img3} alt="img" />
                        <h3>Project 3</h3>
                        <div class="header-fig-text">
                        Project Scope and Objectives: Begin by outlining the scope of the
                            project, which involves defining the project's boundaries and what
                            it aims to achieve. Clearly state the project's objectives,
                            including specific goals, deliverables, and desired outcomes.
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head2 ? "read_active_header" : "")
                            }
                        >
                            Project Scope and Objectives: Begin by outlining the scope of the
                            project, which involves defining the project's boundaries and what
                            it aims to achieve. Clearly state the project's objectives,
                            including specific goals, deliverables, and desired outcomes.
                            Project Timeline and Milestones: Provide a timeline that details
                            the project's schedule, including key milestones and deadlines.
                            Break down the project into manageable phases, indicating when
                            each phase is expected to start and finish. This helps in tracking
                            progress and ensuring that the project stays on schedule. Resource
                            Allocation and Responsibilities: Specify the resources required
                            for the project, such as personnel, equipment, and budget. Clearly
                            define the roles and responsibilities of team members, including
                            project managers, stakeholders, and any subcontractors or
                            partners. This ensures that everyone knows their tasks and
                            accountabilities throughout the project's lifecycle.
                        </div>
                        <button class="header-fig-btn" onClick={header_read2}>
                            {header_text2}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Project;
