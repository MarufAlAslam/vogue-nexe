import { useState } from "react";
import Slider from "react-slick";

const Heighlight = () => {
  const settings = {
    rtl: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 30000,
    swipeToSlide: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
  };
  const setting2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 30000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    vertical: true,
    arrows: false,
  };

  var [modal, setModal] = useState(false);
  var [modalContent, setModalContent] = useState({
    url: "",
    type: "",
  });

  return (
    <>
      <div className="Hightlights">
        <div
          onClick={() => setModal(false)}
          className={`Modal ${modal ? "active" : ""}`}
        >
          {modalContent.type === "image" ? (
            <img src={modalContent.url} alt="" />
          ) : (
            <video muted autoPlay loop>
              <source src={modalContent.url} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="HightlightsInner">
          <Slider {...setting2}>
            <div>
              <Slider {...settings}>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/1.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/1.webp",
                        type: "image",
                      });
                    }}
                  >
                    <img src="/images/highlists/1.webp" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/2.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/2.webp",
                        type: "image",
                      });
                    }}
                  >
                    <img src="/images/highlists/2.webp" alt="" />
                  </div>
                </div>
              </Slider>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/3.webp",
                        type: "image",
                      });
                    }}
                  >
                    <img src="/images/highlists/3.webp" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/3.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/3.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/4.webp",
                        type: "image",
                      });
                    }}
                  >
                    <img src="/images/highlists/4.webp" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/4.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/4.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </Slider>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/5.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/5.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/1.webp",
                        type: "image",
                      });
                    }}
                  >
                    <img src="/images/highlists/1.webp" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/6.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/6.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/2.webp",
                        type: "video",
                      });
                    }}
                  >
                    <img src="/images/highlists/2.webp" alt="" />
                  </div>
                </div>
              </Slider>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/3.webp",
                        type: "image",
                      });
                    }}
                  >
                    <img src="/images/highlists/3.webp" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/7.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/7.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/images/highlists/4.webp",
                        type: "image",
                      });
                    }}
                  >
                    <img src="/images/highlists/4.webp" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    className="customSlide"
                    onClick={() => {
                      setModal(true);
                      setModalContent({
                        url: "/videos/highlights/8.mp4",
                        type: "video",
                      });
                    }}
                  >
                    <video muted autoPlay loop>
                      <source src="/videos/highlights/8.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </Slider>
            </div>
          </Slider>
        </div>
        <section className="social white">
          <a
            href="https://www.instagram.com/vogueluxuryevents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Follow Us
          </a>
        </section>
      </div>
    </>
  );
};

export default Heighlight;
