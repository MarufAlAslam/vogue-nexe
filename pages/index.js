import Head from "next/head";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [videState, setVideoState] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(1);
  const [videoPlayedPer, setVideoPlayedPer] = useState(0);
  const [mute, setMute] = useState(true);

  const PlayerRef = useRef();

  const videoSrcChangeHandler = () => {
    if (currentVideoSrc === 5) {
      setCurrentVideoSrc(1);
    } else {
      setCurrentVideoSrc(currentVideoSrc + 1);
    }
  };

  useEffect(() => {
    PlayerRef.current.load();
    PlayerRef.current.play();
  }, [currentVideoSrc]);

  return (
    <>
      <Head>
        <title>Home | Vogue Luxury Events</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="heroSection">
          <div
            onClick={() => {
              setVideoState(true);
            }}
            style={{ visibility: videState ? "hidden" : "visible" }}
            className="circlesDiv"
          >
            <div
              style={{
                opacity: videState ? "0" : "0",
                transform: `translate(-50%,-50%) scale(${
                  videState ? "1.09" : "1"
                })`,
              }}
              className="outerCircles"
            ></div>
            <div
              style={{
                opacity: videState ? "0" : "0",
                transform: `translate(-50%,-50%) scale(${
                  videState ? "1.09" : "1"
                })`,
              }}
              className="innerCircle"
            >
              <img
                style={{ zIndex: 999 }}
                onClick={() => {
                  setVideoState(true);
                }}
                src="/images/arrow.png"
                alt=""
              />
            </div>
          </div>

          <div
            onClick={() => {
              videState && setVideoState(false);
              setMute(true);
            }}
            style={{
              width: videState ? "100%" : "90%",
              height: videState ? "100%" : "72%",
            }}
            className="videoDiv"
          >
            <video
              onTimeUpdate={(e) =>
                setVideoPlayedPer(
                  ((e.target.currentTime / e.target.duration) * 100).toFixed(0)
                )
              }
              ref={PlayerRef}
              controls={false}
              onEnded={videoSrcChangeHandler}
              autoPlay
              muted={mute}
              playsInline
            >
              <source src={`/videos/hero${currentVideoSrc}.mp4`}></source>
            </video>
          </div>

          {/* TimeLine */}
          <div
            style={{
              bottom: videState ? "10%" : "7%",
              opacity: videState ? "1" : "0",
            }}
            className="timeLineOuter"
          >
            <div className="dot"></div>
            <div className="atualTimeLineOuter">
              <div
                style={{ flexGrow: currentVideoSrc === 1 ? 2 : 1 }}
                className="eachVideoTimeLine"
              >
                <div onClick={() => setCurrentVideoSrc(1)} className="line">
                  <div
                    style={{
                      width:
                        currentVideoSrc > 1
                          ? "100%"
                          : `${currentVideoSrc === 1 ? videoPlayedPer : 0}%`,
                    }}
                    className="lineMoving"
                  ></div>
                </div>
                <div
                  style={{
                    backgroundColor:
                      currentVideoSrc >= 2 ? "#fff" : "transparent",
                  }}
                  onClick={() => setCurrentVideoSrc(1)}
                  className="dot"
                ></div>
              </div>

              <div
                style={{ flexGrow: currentVideoSrc === 2 ? 2 : 1 }}
                className="eachVideoTimeLine"
              >
                <div onClick={() => setCurrentVideoSrc(2)} className="line">
                  <div
                    style={{
                      width:
                        currentVideoSrc > 2
                          ? "100%"
                          : `${currentVideoSrc === 2 ? videoPlayedPer : 0}%`,
                    }}
                    className="lineMoving"
                  ></div>
                </div>
                <div
                  style={{
                    backgroundColor:
                      currentVideoSrc >= 3 ? "#fff" : "transparent",
                  }}
                  onClick={() => setCurrentVideoSrc(2)}
                  className="dot"
                ></div>
              </div>

              <div
                style={{ flexGrow: currentVideoSrc === 3 ? 2 : 1 }}
                className="eachVideoTimeLine"
              >
                <div onClick={() => setCurrentVideoSrc(3)} className="line">
                  <div
                    style={{
                      width:
                        currentVideoSrc > 3
                          ? "100%"
                          : `${currentVideoSrc === 3 ? videoPlayedPer : 0}%`,
                    }}
                    className="lineMoving"
                  ></div>
                </div>
                <div
                  style={{
                    backgroundColor:
                      currentVideoSrc >= 4 ? "#fff" : "transparent",
                  }}
                  onClick={() => setCurrentVideoSrc(3)}
                  className="dot"
                ></div>
              </div>

              <div
                style={{ flexGrow: currentVideoSrc === 4 ? 2 : 1 }}
                className="eachVideoTimeLine"
              >
                <div onClick={() => setCurrentVideoSrc(4)} className="line">
                  <div
                    style={{
                      width:
                        currentVideoSrc > 4
                          ? "100%"
                          : `${currentVideoSrc === 4 ? videoPlayedPer : 0}%`,
                    }}
                    className="lineMoving"
                  ></div>
                </div>
                <div
                  style={{
                    backgroundColor:
                      currentVideoSrc >= 5 ? "#fff" : "transparent",
                  }}
                  onClick={() => setCurrentVideoSrc(4)}
                  className="dot"
                ></div>
              </div>

              <div
                style={{ flexGrow: currentVideoSrc === 5 ? 2 : 1 }}
                className="eachVideoTimeLine"
              >
                <div onClick={() => setCurrentVideoSrc(5)} className="line">
                  <div
                    style={{
                      width:
                        currentVideoSrc > 5
                          ? "100%"
                          : `${currentVideoSrc === 5 ? videoPlayedPer : 0}%`,
                    }}
                    className="lineMoving"
                  ></div>
                </div>
                <div
                  style={{
                    backgroundColor:
                      currentVideoSrc >= 5 ? "#fff" : "transparent",
                  }}
                  onClick={() => setCurrentVideoSrc(5)}
                  className="dot"
                ></div>
              </div>
            </div>
          </div>

          <div
            style={{ visibility: videState ? "visible" : "hidden" }}
            onClick={() => setMute(!mute)}
            className="soundIcon"
          >
            <i className={`fa-solid fa-volume-${mute ? "off" : "high"}`}></i>
          </div>

          {/* social */}
         
          {/* social */}
        </div>
        <section className="social">
            <a
              href="https://www.instagram.com/vogueluxuryevents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Follow Us
            </a>
          </section>
      </main>
    </>
  );
}
