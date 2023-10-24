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
                            We have a long and successful track record in our industry. Our consistent performance and history of achieving outstanding results demonstrate our commitment to excellence and our ability to meet and exceed our customers' expectations. You can trust in our proven success.
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head ? "read_active_header" : "")
                            }
                        >
                            We have a long and successful track record in our industry. Our consistent performance and history of achieving outstanding results demonstrate our commitment to excellence and our ability to meet and exceed our customers' expectations. You can trust in our proven success.
                            Our track record is backed by a large and satisfied customer base. Many of our customers have not only returned for repeat business but have also referred others to us. Their positive experiences and testimonials reflect our dedication to delivering quality and value, making us the top choice in the industry.
                        </div>
                        <button class="header-fig-btn" onClick={header_read}>
                            {header_text}
                        </button>
                    </div>


                    
                    <div class="header-fig-container">
                        <img src={img2} alt="img" />
                        <h3>Trusted by Leaders</h3>
                        <div class="header-fig-text">
                        Our product/service has gained the trust and very good trusted by endorsement of industry leaders and prominent figures. These influential individuals and organizations rely on our offerings, recognizing the quality and value we provide. Their trust is a testament to our reputation and reliability.
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head1 ? "read_active_header" : "")
                            }
                        >Leaders in various sectors have experienced significant success and positive outcomes by choosing our product/service. Their success stories and testimonials serve as evidence of our capability to deliver results that meet the high standards expected by industry leaders. When leaders choose us, it's because we've consistently proven our worth.
                            Our product/service has gained the trust and endorsement of industry leaders and prominent figures. These influential individuals and organizations rely on our offerings, recognizing the quality and value we provide. Their trust is a testament to our reputation and reliability.!
                        </div>
                        <button class="header-fig-btn" onClick={header_read1}>
                            {header_text1}
                        </button>
                    </div>

                    <div class="header-fig-container">
                        <img src={img3} alt="img" />
                        <h3>Brand Equity</h3>
                        <div class="header-fig-text">
                        Our brand enjoys a high level of trust and recognition in the market. Over time, we have consistently delivered quality products/services, built a solid reputation, and established a strong presence. This trust and recognition mean that consumers and clients can rely on us to meet their needs and expectations.
                        </div>

                        <div
                            className={
                                "read_more_header " + (read_head2 ? "read_active_header" : "")
                            }
                        >
                            Our brand enjoys a high level of trust and recognition in the market. Over time, we have consistently delivered quality products/services, built a solid reputation, and established a strong presence. This trust and recognition mean that consumers and clients can rely on us to meet their needs and expectations.
                            Our brand's equity extends to the premium value associated with our offerings. Customers are often willing to pay a premium for our products/services because they associate our brand with quality, reliability, and a superior customer experience. This added value is a reflection of the strength of our brand in the market.
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
