import React,{useState} from 'react'
import Header from './components/Header'
import img1 from './assets/header_fig1.png';
import img2 from './assets/header_fig2.jpg';
import img3 from './assets/header_fig3.jpg';
import Footer from './components/Footer'
const Facts = () => {
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
            <Header path="facts"/>
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

            <Footer/>
        </div>
    )
}

export default Facts
