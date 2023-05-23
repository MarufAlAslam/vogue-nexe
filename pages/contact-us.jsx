import React from 'react'

const contact = () => {
    return (
        <div className='contact'>
            <div class="contact-us">
                <div class="contactus-bgimg">
                    <div class="overlay"></div>
                </div>
                <div class="contactcontent">
                    <div class="contactheading">
                        <h1>Contact Us</h1>
                    </div>


                    <div class="privatdining">
                        <h2>Address</h2>
                        <p>Birmingham, UK and Business Bay Dubai</p>
                    </div>


                    {/* <div class="contact-membership">
                        <h2>Membership</h2>
                        <p>
                            We would love to hear from you! If you're looking for a luxury event planner to help you create a truly unforgettable celebration, please get in touch with Vogue Luxury Events today. Our team of experienced event planners is here to help you every step of the way, from initial concept to final execution.<br />
                            To contact us, please fill out the form below or use the contact information provided. One of our team members will be in touch with you shortly to discuss your event and how we can help make your dreams a reality.
                        </p>
                    </div> */}

                    <div class="emptydiv"></div>
                    <div class="emptydiv"></div>


                    <div class="presspartner">
                        <h2>Contact Information</h2>
                        <a href="tel:+44 7973 554333">+44 7973 554333</a>
                        <br />
                        <a href="tel:+44 7961 715151">+44 7961 715151</a>
                        <br />
                        <a href="mailto:sati@vogueluxuryevents.com" class="css-1jq0uo9 ejlpgkq0" data-projection-id="203">sati@vogueluxuryevents.com</a>
                        <br />
                        <a href="mailto:kelly@vogueluxuryevents.com" class="css-1jq0uo9 ejlpgkq0" data-projection-id="203">kelly@vogueluxuryevents.com</a>
                    </div>



                    <div class="contact-carear">
                        <h2>Careers</h2>
                        <p>
                            Thank you for considering Vogue Luxury Events for your luxury event planning needs. We look forward to hearing from you and helping you create a celebration that you and your guests will remember for years to come.
                        </p>
                        <a href="mailto:hello@vogueluxuryevents.com" class="css-1jq0uo9 ejlpgkq0" data-projection-id="203">hello@vogueluxuryevents.com</a>
                    </div>


                </div>
                
                <div style={{padding:"20px"}} className="contactFormWrapper">
                    <div className="contactForm">
                        <div className="left">

                            <h2>Get in touch with us</h2>
                            <p style={{marginBottom: "20px", fontSize: "13px"}}>
                            PLEASE COMPLETE THE FORM BELOW, INCLUDING AS MUCH INFORMATION AS POSSIBLE REGARDING THE EVENT.
                            </p>
                            <form>
                                <div className="eachfield">
                                    <label htmlFor="name">First Name</label>
                                    <input htmlFor="id" type="text" placeholder='First Name' required />
                                </div>
                                <div className="eachfield">
                                    <label htmlFor="name">Last Name</label>
                                    <input htmlFor="id" type="text" placeholder='Last Name' required />
                                </div>
                                <div className="eachfield">
                                    <label htmlFor="email">Email Address</label>
                                    <input htmlFor="id" type="email" placeholder='Email' required />
                                </div>
                                <div className="eachfield">
                                    <label htmlFor="subject">Subject</label>
                                    <input id="subject" type="text" placeholder='Subject' required />
                                </div>
                                
                                <div className="eachfield">
                                    <label htmlFor="date">Date of enquiry</label>
                                    <input id="date" type="date" placeholder='Date of Enquiry' required />
                                </div>
                                <div className="eachfield">
                                    <label htmlFor="event">Where is your event?</label>
                                    <input id="event" type="text" placeholder='Where is your event?' required />
                                </div>
                                <div className="eachfield">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="" placeholder='Message' id="message" cols="30" rows="10"></textarea>
                                </div>

                                <div className="eachfield">
                                    <button>Send Message</button>
                                </div>

                            </form>
                        </div>
                        <div className="right">
                            <img className='zoomingImg cover' style={{objectFit:"cover"}} src="/images/contact.JPG" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default contact