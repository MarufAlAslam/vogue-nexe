import '@/styles/globals.css'
import '@/styles/NavBar.css'
import '@/styles/Home.css'
import '@/styles/Club.css'
import '@/styles/Highlights.css'
import '@/styles/Contact.css'
import '@/styles/testimonials.css'
import '@/styles/about.css'
import { useEffect, useState } from 'react'

import NavBar from '@/components/NavBar/NavBar'

export default function App({ Component, pageProps }) {


  const [showPreLoaderBtn, setShowPreloaderBtn] = useState(true)


  useEffect(() => {

    document.addEventListener('scroll', function () {
      document.querySelectorAll('.zoomingImg').forEach((v) => {
        if (v.getBoundingClientRect().y < (window.innerHeight) && parseInt(v.getBoundingClientRect().bottom) > 0) {
          var scrollAmmount = (v.getBoundingClientRect().bottom) / (window.innerHeight + v.getBoundingClientRect().height)
          v.style.transform = `scale(${1 + (.5 * scrollAmmount)})`
        }
      })
    })

    document.addEventListener('load', function () {
      document.getElementById('websiteContainer').style.display = 'none';
    })

  })




  return (
    // <div style={{ backgroundColor: "red", height: "100vh" }} className='mainAppSection' >

    <>

      <div style={{ display: !showPreLoaderBtn ? "none" : "flex" }} className="preLoaderSection">
        <div className="innerLoader">
          <img src="/images/logo.png" alt="Vogue Luxury Events Logo" />
          <div onClick={() => { setShowPreloaderBtn(false) }} className="nextBtn">
            <div style={{ fontSize: "22px", marginBottom: "5px" }} >ENTER</div>
            <div className='arrowWithDot' > <i style={{ fontSize: "5px" }} className='fa-solid fa-circle'></i> <i className='fa-solid fa-play'></i></div>
          </div>
        </div>
      </div>


      <div style={{ display: showPreLoaderBtn ? "none" : "block" }} className="actualContent">
        <NavBar>
          <Component {...pageProps} />
        </NavBar>
      </div>


    </>

  )
}