import React,{useState} from 'react'
import Footer from './components/Footer';
import img9 from './assets/service_fig1.jpg';
import '../src/App.css';
import Header from './components/Header';
import img1 from './assets/header_fig1.png';
import img2 from './assets/header_fig2.jpg';
import img3 from './assets/header_fig3.jpg';
const Project = () => {
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
            <Header path="project"/>
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
                        <h3>Project 2</h3>
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
                        <h3>Project 3</h3>
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

export default Project
