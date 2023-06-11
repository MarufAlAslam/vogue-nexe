import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavBar = ({ children }) => {

    const [NavToggle, setNavToggle] = useState(false)

    const [animate, setAnimate] = useState(false)
    const { pathname } = useRouter()

    useEffect(() => {
        setNavToggle(false)
    }, [pathname])


    const animateHandler = () => {
        setAnimate(true)
        setNavToggle(false)

        setTimeout(() => {
            setAnimate(false)
        }, 2000);
    }

    return (
        <div style={{ height: NavToggle ? "100vh" : "auto", overflow: NavToggle ? "hidden" : "auto" }} className="Layout">

            {
                animate && (
                    <div className="nav-animation">
                        <div className="nav-animation-1"></div>
                        <div className="nav-animation-2"></div>
                        <div className="nav-animation-3"></div>
                    </div>
                )
            }

            {/* Navivation Bar */}
            <nav>
                <div className="navBarToggle">
                    <div style={{ transition: ".5s" }} className="logo">
                        {/* <Link style={{ textDecoration: "none", color: NavToggle ? "#fff" : "#000" }} href="/"> */}
                        <Link style={{ textDecoration: "none", color: "#f7ef8a" }} href="/">
                            Vogue Luxury Events
                        </Link></div>
                    <div>
                        <button onClick={() => setNavToggle(!NavToggle)}> {NavToggle ? "CLOSE" : (pathname === "/" ? "HOME" : pathname.substring(1).toUpperCase()).replace("-", " ")}
                            {!NavToggle ?
                                <i className='fa-solid fa-bars'></i>
                                :
                                <i className='fa-solid fa-xmark'></i>
                            }
                        </button>
                    </div>
                </div>



                <div style={{ opacity: NavToggle ? "1" : "0", visibility: NavToggle ? "visible" : "hidden" }} className="actualNavBar">
                    <div className="navLinks">
                        <ul>
                            <li><Link onClick={animateHandler} href="/"> <img src="/images/arrow.png" alt="" /> Home </Link></li>
                            <li><Link onClick={animateHandler} href="/vogue-experience"> <img src="/images/arrow.png" alt="" /> VOGUE EXPERIENCE </Link></li>
                            <li><Link onClick={animateHandler} href="/highlights"> <img src="/images/arrow.png" alt="" /> HIGHLIGHTS </Link></li>
                            <li><Link onClick={animateHandler} href="/testimonials"> <img src="/images/arrow.png" alt="" /> TESTIMONIALS </Link></li>
                            <li><Link onClick={animateHandler} href="/about"> <img src="/images/arrow.png" alt="" /> ABOUT US </Link></li>
                            <li><Link onClick={animateHandler} href="/contact-us"> <img src="/images/arrow.png" alt="" /> CONTACT US</Link></li>
                        </ul>
                    </div>
                    {/* <div className="socialLinks">
                        <div className="allSocials">
                            <div>
                                <i className='fa-brands fa-instagram'></i> FOLLOW US
                            </div>
                            <div>
                                The Caring Family Foundation
                            </div>
                            <div>
                                TERMS OF USE
                            </div>
                            <div>
                                POLICIES
                            </div>
                        </div>

                        <div className="copyright">
                            © 2022 46 BERKELEY SQUARE LTD (TRADING AS ANNABEL’S). A BIRLEY CLUB.
                        </div>
                    </div> */}
                </div>
            </nav>
            {children}


        </div>
    )
}

export default NavBar