import React from 'react'

// import aboutImg from "../assets/images/about.jpg"

const About = () => {
    return (
        <div className='About'>
            <header>
                <div className="Header">
                    <h1>About Us </h1>

                </div>
            </header>

            <div className="grid">
                <div className="text">
                    <p> Your premier luxury wedding planner based in the UK. Our company started over 15 years ago as a hobby by our founder, Sati, and has since blossomed into a beautiful family business
                        We've loved every minute of our journey so far, and we're excited to continue delivering unparalleled luxury wedding planning services for many years to come. As a family business, we bring a unique touch to our work, and we believe that our passion and dedication to our clients sets us apart from other wedding planners.
                    </p>
                </div>
                <div style={{ overflow: "hidden" }} className="Image">

                    <img className='zoomingImg' src="/images/about/2.webp" alt="" />
                </div>
            </div>

            <div className="grid">
                <div style={{ overflow: "hidden" }} className="Image">
                    <img className='zoomingImg' src="/images/about/3.webp" alt="" />
                </div>
                <div className="text">
                    <p>
                        At Vogue Luxury Events, we understand that every wedding is unique and that our clients have individual tastes and preferences. That's why we offer a personalized approach to each wedding we plan, working closely with our clients to create a bespoke wedding experience that reflects their style and personality.
                    </p>
                </div>
            </div>

            <div className="grid">
                <div className="text">
                    <p>
                        Our team is made up of experienced and professional wedding planners who have a passion for creating unforgettable events. We believe that every detail counts, and we'll work tirelessly to ensure that your wedding day is everything you've dreamed of and more.
                    </p>
                </div>
                <div style={{ overflow: "hidden" }} className="Image">

                    <img className='zoomingImg' src="/images/about/5.webp" alt="" />
                </div>
            </div>

            <div className="grid">
                <div style={{ overflow: "hidden" }} className="Image">
                    <img className='zoomingImg' src="/images/about/4.webp" alt="" />
                </div>
                <div className="text">
                    <p>
                        Whether you're looking for a classic and elegant wedding, a modern and chic celebration, or something completely bespoke, Vogue Luxury Events is here to make your dreams a reality. Contact us today to learn more about our luxury wedding planning services and to start planning your perfect day.
                    </p>
                </div>
            </div>
            <div style={{ overflow: "hidden" }} className="Image">
                <img className='zoomingImg' src="/images/about-landscape.jpg" style={{ width: "100%" }} alt="" />
            </div>
            {/* <img src="/images/about-landscape.jpg" style={{width: "100%"}} alt="" /> */}


            {/* <img src={aboutImg} alt="" /> */}


        </div>
    )
}

export default About