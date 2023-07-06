import Head from "next/head";
import Link from "next/link";

const club = () => {
  return (
    <>
      <Head>
        <title>Guest Info</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="testimonials">
        {/* <header className="bg-none">
          <div className="Header">
            <h1>client testimonials </h1>
          </div>
        </header> */}

        <div className="container">
          <div className="text-center">
            <h1 className="testimonial-title">client testimonials</h1>
            <h3 className="subtitle">
              Read love notes from our previous clients and vendor partners!
            </h3>
          </div>
        </div>

        <div class="container">
          <div class="box">
            <div class="imgDiv left">
              <img
                className="zoomingImg"
                src="/images/testimonials/1.jpg"
                alt=""
              />
              <p>Photography by Joe & Jen Photo</p>
            </div>
            <div class="right text">
              <div class="content">
                <h2 className="name">Allie + Sam</h2>
                <h4 className="date">MARRIED SEPTEMBER 2022</h4>
                <p className="fs-18">
                  “Soon after getting engaged, it became clear that we needed a
                  partner to help us navigate the wedding planning process,
                  especially during the pandemic, and pull off the event of our
                  dreams. Lexie was exactly what we were hoping for - a steady
                  and dedicated guide who advised us on the best vendors, a
                  stunning design and every detail in between in the lead up to
                  our big day. She is detail-oriented and understood our
                  priorities and needs from the get-go, which was so comforting
                  during a busy time! And when Lexie went on maternity leave,
                  Jocelyn stepped in to flawlessly execute all of the moving
                  parts. From day one, she was extremely kind, caring and
                  responsive to our every need - and anticipated things we
                  hadn't even thought of! She was also a joy to have with us on
                  the wedding day as she led the coordination, making sure we
                  were on time, nourished and enjoying our day. As a couple with
                  a very specific vision for what we wanted our wedding to feel
                  like, the Availed team were amazing partners in helping to
                  make it a reality. Thank you, Lexie and Jocelyn!”
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="left text">
              <div class="content">
                <h2 className="name">Kaitlin + Josh</h2>
                <h4 className="date">MARRIED JULY 2022</h4>
                <p className="fs-18">
                  “I wish I could give Availed 10 stars because they absolutely
                  deserve it. Lexie and her team are outstanding and my husband
                  and I are so thankful we worked with them on our big day. They
                  made the planning processes and wedding day seamless and fun
                  and I’m honestly note quite sure how we would have done it all
                  without them. Lexie and her team brought our dreams to life
                  and designed us the most stunning wedding. We started off the
                  planning process with Lexie and later learned that Jocelyn
                  would be our lead planner while Lexie was out on maternity
                  leave. This transition was so easy and we had a blast working
                  with Jocelyn – she coordinated with all of the vendors leading
                  up to the wedding and kept us on schedule our entire day. I
                  didn’t even have to keep track of our timeline on the wedding
                  day – she had everything under control. If you are considering
                  booking Availed for your big day, I’m here to tell you that
                  you 1000% should. It was the best decision we made while
                  planning our wedding.”
                </p>
              </div>
            </div>
            <div class="imgDiv right">
              <img
                className="zoomingImg"
                src="/images/testimonials/2.jpg"
                alt=""
              />
              <p>Photography by Joe & Jen Photo</p>
            </div>
          </div>
          <div class="box">
            <div class="imgDiv left">
              <img
                className="zoomingImg"
                src="/images/testimonials/3.jpg"
                alt=""
              />
              <p>Photography by Joe & Jen Photo</p>
            </div>
            <div class="right text">
              <div class="content">
                <h2 className="name">Clara + Justin</h2>
                <h4 className="date">MARRIED JUNE 2022</h4>
                <p className="fs-18">
                  “Taylor and Lexie @ Availed was absolutely wonderful to work
                  with! We worked with Taylor with the month of the wedding
                  coordinator package. Taylor was so on top of things when it
                  came to connecting with all of our vendors and coordinating
                  the wedding with the event planners at the venue. Her and
                  Bella also helped with setting up the Korean ceremony portion
                  of the wedding, which our guest loved so much. Our wedding was
                  so perfect and I can't thank Taylor enough for helping our day
                  go by so smoothly. I would highly recommend Taylor and
                  Availed!”
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="left text">
              <div class="content">
                <h2 className="name">Laurel + Coltyn</h2>
                <h4 className="date">MARRIED JUNE 2022</h4>
                <p className="fs-18">
                  “The Availed team is AMAZING! My husband and I finally got
                  married in June of 2022 after working with Lexie since 2018.
                  Even though it had been a whirlwind few years and Lexie always
                  kept me calm and feeling comfortable throughout all the
                  changes, postponements, etc. I reached out countless times for
                  advice and always got such a quick and thorough response! I
                  would recommend the Availed team to ANYONE getting married - I
                  had Christine and Bethany work with me on our wedding day and
                  it truly was a game changer. I don't think I could have done
                  half of it without them (and would have been beyond stressed
                  without their guidance). Overall, I truly cannot thank Availed
                  enough! If you are thinking about it, BOOK THEM!”
                </p>
              </div>
            </div>
            <div class="imgDiv right">
              <img
                className="zoomingImg"
                src="/images/testimonials/4.jpg"
                alt=""
              />
              <p>Photography by Joe & Jen Photo</p>
            </div>
          </div>
          <div class="box">
            <div class="imgDiv left">
              <img
                className="zoomingImg"
                src="/images/testimonials/5.jpg"
                alt=""
              />
              <p>Photography by Joe & Jen Photo</p>
            </div>
            <div class="right text">
              <div class="content">
                <h2 className="name">Loren + Max</h2>
                <h4 className="date">MARRIED MAY 2022</h4>
                <p className="fs-18">
                  “Lexie and her team are the absolute best! I could not
                  recommend them more. When I got engaged, I interviewed over 10
                  wedding planners and Lexie was by far my top choice - she's
                  straightforward, thoughtful, and takes care of every detail
                  you could imagine. We hired Lexie to design our wedding and it
                  was SO beautiful; she recommended the best vendors, and we
                  could not have been more happy with how the day turned out.
                  She'll bring you in to the details that you want to contribute
                  to, but also takes the time to understand your vision so that
                  she can help make some of the decisions for you. Lexie
                  organized every detail not only leading up to the wedding but
                  on the day of - she was amazing. I realized on the day of our
                  wedding that I'd mixed up a detail with the catering orders
                  and Lexie was so calm, swiftly corrected it, and I didn't have
                  to think twice about it. I recommend Lexie to everyone I know
                  - seriously, I don't know what we would have done without her!
                  Here's your sign to hire Availed!!!!”
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="left text">
              <div class="content">
                <h2 className="name">Lindsey + Shane</h2>
                <h4 className="date">MARRIED OCTOBER 2021</h4>
                <p className="fs-18">
                  “The only regret I have about hiring Availed Events was not
                  hiring them sooner!! They were a life saver. Wedding planning
                  is stressful and planning a wedding during COVID and moving
                  out of state is extra stressful. Lexie and her team made
                  everything so much easier. After our first meeting a huge
                  weight was lifted. Her planning made our day run so smooth!
                  Her team made it so easy not to worry and just enjoy our day.
                  Thank you guys for everything!”
                </p>
              </div>
            </div>
            <div class="imgDiv right">
              <img
                className="zoomingImg"
                src="/images/testimonials/6.jpg"
                alt=""
              />
              <p>Photography by Joe & Jen Photo</p>
            </div>
          </div>
          <div class="box">
            <div class="imgDiv left">
              <img
                className="zoomingImg"
                src="/images/testimonials/7.jpg"
                alt=""
              />
              <p>Photography by Joe & Jen Photo</p>
            </div>
            <div class="right text">
              <div class="content">
                <h2 className="name">Hinnah + Atif</h2>
                <h4 className="date">MARRIED JULY 2021</h4>
                <p className="fs-18">
                  “Lexie was great in all things planning! We had to reschedule
                  our 3 day wedding events several times because of COVID, and
                  Lexie was very helpful and supportive. I knew I could just
                  show up to my events without having to stress about the little
                  or big things. Definitely recommend!”
                </p>
              </div>
            </div>
          </div>
          <div className="box hidden">
            <div className="imgDiv">
              <img
                className="zoomingImg"
                src="/images/testimonials/5.webp"
                alt=""
              />
            </div>
          </div>

          <div className="more">
            <a href="/testimonials" className="btn btn-primary">
              More Reviews
            </a>
          </div>
        </div>
        <div className="relative">
          <section className="social experience black">
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
