import { useEffect, useRef } from "react";
import Head from "next/head";

const club = () => {
  useEffect(() => {
    const letters = document
      .getElementById("lettersMoveUp")
      .innerText.split("");
    document.getElementById("lettersMoveUp").innerHTML = "";
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.setProperty("--delay", index.toString());
      document.getElementById("lettersMoveUp").appendChild(span);
    });
  });

  // Fadeing up words animations
  const headingsRef = useRef([]);
  useEffect(() => {
    headingsRef.current = headingsRef.current.slice(0, headingsRef.length);
  }, [headingsRef]);
  const scrollHandler = () => {
    headingsRef.current.map((v) => {
      if (v.getBoundingClientRect().y < window.innerHeight / 1.3) {
        for (var i = 0; i < v.childNodes.length; i++) {
          v.childNodes[i].style.setProperty("animation-name", "fade-up-letter");
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);
  const convertToWorldsSpans = (s) => {
    var words = s.split(" ");
    var spans = words.map((v, i) => {
      return (
        <span key={i} style={{ "--delay": i }}>
          {v}
        </span>
      );
    });
    return spans;
  };

  return (
    <>
      <Head>
        <title>The Club</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Club">
        <div className="theClubContainerGrid">
          <h1 id="lettersMoveUp">The Vogue Experience</h1>

          <section className="clubItem item1">
            <div className="imgDiv">
              <img
                className="zoomingImg"
                src="/images/experience/2.jpg"
                alt=""
              />
            </div>
            <div className="contentDiv">
              <h2
                ref={(el) => (headingsRef.current[0] = el)}
                className="wordsFadeUp"
              >
                {convertToWorldsSpans("The UK's Most Luxurious events company")}
              </h2>
            </div>
          </section>

          {/* <section className='clubItem item2' >
            <div className="imgDiv">
              <img className='zoomingImg' src="/images/experiences/2.webp" alt="" />
            </div>
            <div className="textOverlayShade">
              <div className="textOverlay">
                <h2 ref={el => headingsRef.current[1] = el} className='wordsFadeUp'>{convertToWorldsSpans('Vogue Luxury Events is renowned for transforming space into theatrical, themed environment, by using the most innovative technologies in the industry')}</h2>
                <h3 style={{ color: "#fff" }} ref={el => headingsRef.current[2] = el} className='wordsFadeUp'>{convertToWorldsSpans('Lorem ipsum dolor sit amet consectetur')}</h3>
              </div>
            </div>
          </section> */}

          <section className="clubItem item3">
            <h2
              ref={(el) => (headingsRef.current[3] = el)}
              className="wordsFadeUp"
            >
              {convertToWorldsSpans(
                "Vogue Luxury Events is renowned for transforming space into theatrical, themed environment, by using the most innovative technologies in the industry"
              )}
            </h2>
          </section>

          <section className="clubItem item4">
            <div className="imgDiv">
              <img
                className="zoomingImg"
                src="/images/experience/4jpg"
                alt=""
              />
            </div>
          </section>

          <section className="clubItem item5">
            <h2
              ref={(el) => (headingsRef.current[4] = el)}
              className="wordsFadeUp"
            >
              {convertToWorldsSpans("Events")}
            </h2>
            <div
              style={{ padding: "60px", overflow: "hidden" }}
              className="imgDiv"
            >
              <div
                style={{ overflow: "hidden" }}
                className="innerImageContainer"
              >
                <img
                  className="zoomingImg"
                  src="/images/experience/6.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="contentDiv">
              <h2
                ref={(el) => (headingsRef.current[5] = el)}
                className="wordsFadeUp"
              >
                {convertToWorldsSpans(
                  "No event is too large or too small to accomplish. We aspire to create magical moments for your special day"
                )}
              </h2>
            </div>
          </section>

          <section className="clubItem item4">
            <div className="imgDiv">
              <img
                className="zoomingImg"
                src="/images/experience/7.jpg"
                alt=""
              />
            </div>
          </section>

          {/* Muneeb Code */}

          <div className="parent_grid">
            <div className="child_div">
              <h2
                style={{ fontSize: "calc(18px + 2vw)" }}
                ref={(el) => (headingsRef.current[7] = el)}
                className="wordsFadeUp"
              >
                {convertToWorldsSpans("Why Us?")}
              </h2>
            </div>
            <div style={{ overflow: "hidden" }} className="child_div_two">
              <img
                className="zoomingImg"
                src="/images/experience/8.jpg"
                alt="loading"
              />
            </div>
            <div style={{ overflow: "hidden" }} className="child_div_two">
              <img
                className="zoomingImg"
                src="/images/experience/9.jpg"
                alt="loading"
              />
            </div>
            <div className="child_div">
              <p>
                With an eternal blend of luxurious elegance and fairytail
                atmosphere, Vogue Luxury Events endlessly aims to create one in
                a lifetime magical experience for our clients
              </p>
            </div>
          </div>

          <section className="clubItem item4 relative">
            <h2 className="title abs-title text-white">Entertain</h2>
            <div className="imgDiv">
              <img
                className="zoomingImg"
                src="/images/experience/10.jpg"
                alt=""
              />
            </div>
          </section>

          <div className="parent_grid">
            <div className="child_div">
              <h2
                style={{ fontSize: "calc(18px + 2vw)" }}
                ref={(el) => (headingsRef.current[8] = el)}
                className="wordsFadeUp"
              >
                {convertToWorldsSpans("INDULGE")}
              </h2>
            </div>
            <div style={{ overflow: "hidden" }} className="child_div_two">
              <img
                className="zoomingImg"
                src="/images/experience/11.jpg"
                alt="loading"
              />
            </div>
          </div>
          <div className="parent_grid">
            <div style={{ overflow: "hidden" }} className="child_div_two">
              <img
                className="zoomingImg"
                src="/images/experience/12.jpg"
                alt="loading"
              />
            </div>
            <div className="child_div">
              <h2
                style={{ fontSize: "calc(18px + 2vw)" }}
                ref={(el) => (headingsRef.current[9] = el)}
                className="wordsFadeUp"
              >
                {convertToWorldsSpans("CELEBRATE")}
              </h2>
            </div>
          </div>

          <div className="parent_grid">
            <div className="child_div">
              <h2
                style={{ fontSize: "calc(18px + 2vw)" }}
                ref={(el) => (headingsRef.current[10] = el)}
                className="wordsFadeUp big"
              >
                {convertToWorldsSpans("PRIVATE DINING & EXCLUSIVE PARTIES")}
              </h2>
            </div>
            <div style={{ overflow: "hidden" }} className="child_div_two">
              <img
                className="zoomingImg"
                src="/images/experience/13.jpg"
                alt="loading"
              />
            </div>
          </div>
        </div>
        <div style={{ overflow: "hidden" }} className="Image">
          <img
            className="zoomingImg"
            src="/images/experience/14.jpg"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
        <div className="relative">
          <section className="social experience">
            <a
              href="https://www.instagram.com/vogueluxuryevents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Follow Us
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default club;
