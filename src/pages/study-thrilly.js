import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Thrilly from "../components/thrilly"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

const SecondPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [])

  const listener = e => {
    let mybutton = document.getElementById("backToTop")
    if (
      document.body.scrollTop > 2600 ||
      document.documentElement.scrollTop > 2600
    ) {
      mybutton.style.display = "block"
      mybutton.style.visibility = "visible"
      mybutton.style.animation = "mymove 0.6s ease-in-out forwards"
      mybutton.style.opacity = "1"
    } else {
      mybutton.style.visibility = "hidden"
      mybutton.style.animation = "mymoveback 0.6s ease-in-out forwards"
      mybutton.style.opacity = "0"
    }
  }

  const scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <Layout>
      <SEO title="Thrilly case study " />
      <div className="Hero">
        <div className="HeroStudy">
          <Thrilly />
        </div>
        <h1>
          Let me introduce you the project that I designed through my entire
          master degree.
        </h1>
        <div className="Separator"></div>
        <div className="IntroStudy">
          <div className="DetailsStudy">
            <div>
              <h3>Role :</h3>
              <ul>
                <li>Product Design</li>
                <li>Art Direction</li>
              </ul>
            </div>
            <div>
              <h3>Time spent :</h3>
              <ul>
                <li>4 months</li>
              </ul>
            </div>
            <div>
              <h3>Product Design :</h3>
              <ul>
                <li>Market research</li>
                <li>User research</li>
                <li>Interviews</li>
                <li>User Journey</li>
                <li>KPIs</li>
                <li>Wireframes</li>
                <li>Low-Fi prototype</li>
                <li>User Testing</li>
                <li>Mid-Fi prototype</li>
                <li>Style Guide</li>
              </ul>
            </div>
            <div>
              <div>
                <h3>Art direction :</h3>
                <ul>
                  <li>Value proposition</li>
                  <li>Branding</li>
                  <li>Motion Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="OverviewStudy">
            <h3>Overview</h3>
            <p>
              First things first, let me tell you that the way i’ll explain the
              project is not exactly the way we actually followed it.
            </p>

            <p>
              I’ll introduce you the project through the well known Double
              Diamond methodology because I think that this is the best way for
              me to translate you the core of the project. I decided to avoid
              some details because there is way too much to fit in a single
              study. So i’ll focus essentialy on my roles.
            </p>

            <p>
              Note that because this is a team project, the work was evenly
              split as much as possible between what we actually know and what
              we love doing.
            </p>

            <div>
              <a
                href="https://www.virginiehaeflinger.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="creditsTitle">Teammate : </span>
                <span className="creditsName , creditsLinks">
                  Virginie Haeflinger&nbsp;&nbsp;
                  <FaExternalLinkSquareAlt />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="StudyImages">
          <img src={require("../images/study-thrilly/diamond_1.png")} />
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div className="Separator"></div>
          <div className="StudyTitles">
            <h2>
              Thrilly offers to travelers to live authentic experiences by
              connecting them with locals. Personalized filters allow them to
              find the best experiences based on where they are and what they
              want to do. Locals create, we map, you find.
            </h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div className="Separator"></div>
          <div className="StudyTitles">
            <h2>Anchors</h2>
          </div>
          <div className="StudyAnchors">
            <div className="Anchor">
              <a href="#Context">
                <span className="anchorLinks">
                  &nbsp;What's the context ?&nbsp;
                </span>
              </a>
            </div>
            <div className="Anchor">
              <a href="#Problem">
                <span className="anchorLinks">
                  &nbsp;What's the problem ?&nbsp;
                </span>
              </a>
            </div>
            <div className="Anchor">
              <a href="#Users">
                <span className="anchorLinks">
                  &nbsp;Who are the potential users ?&nbsp;
                </span>
              </a>
            </div>
            <div className="Anchor">
              <a href="#Solution">
                <span className="anchorLinks">
                  &nbsp;What’s the solution ?&nbsp;
                </span>
              </a>
            </div>
            <div className="Anchor">
              <a href="#Hook">
                <span className="anchorLinks">
                  &nbsp;What’s the hook ?&nbsp;
                </span>
              </a>
            </div>
            <div className="Anchor">
              <a href="#Sofar">
                <span className="anchorLinks">
                  &nbsp;How it look so far ?&nbsp;
                </span>
              </a>
            </div>
            <div className="Anchor">
              <a href="#Next">
                <span className="anchorLinks">&nbsp;What’s next ?&nbsp;</span>
              </a>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div id="Context" className="Separator"></div>
          <div className="StudyTitles">
            <h2>The context</h2>
          </div>
          <div className="StudyImages">
            <img src={require("../images/study-thrilly/diamond_2.png")} />
          </div>
        </ScrollAnimation>
        <div className="Context">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              We initiated this project by doing some{" "}
              <span className="Bolder">research</span> about the{" "}
              <span className="Bolder">travel market</span>, his actual size and
              forward predictions. The first task was to{" "}
              <span className="Bolder">take advantage</span> of our{" "}
              <span className="Bolder">natural bias and knowledge</span> about
              the subject to{" "}
              <span className="Bolder">emerge some hypothesis</span> during this
              research.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              <span className="Bolder">France</span> is the first country we
              wanted to start and{" "}
              <span className="Bolder">Paris especially</span> because France is
              probably one of the{" "}
              <span className="Bolder">toughest country</span> in Europe in term
              of legislation. We thought that starting a project here can be
              more easily <span className="Bolder">scalable</span> than starting
              it in another countrie. Secondly because we already know Paris,
              his touristic side and because{" "}
              <span className="Bolder">we are travelers too</span>, it’s easier
              for us to understand them. This is a sample of the data we collect
              :
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <div className="ContextImages">
              <img src={require("../images/study-thrilly/context_1.png")} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              We have <span className="Bolder">localised</span> a lot of
              travellers and backpakers{" "}
              <span className="Bolder">communities</span> all around the web.
              Combined, we can potentialy reach more than{" "}
              <span className="Bolder">200k</span> just with Facebook.
              Unfortunately, depending on when you want to share something in
              this kind of group, your post use to{" "}
              <span className="Bolder">fall</span> and became{" "}
              <span className="Bolder">invisible</span> only 10 minutes after
              your post. So we decided to move on more{" "}
              <span className="Bolder">little groups</span> we founded on
              Reddit's community and this was capital for us to collect{" "}
              <span className="Bolder">quantitative datas</span> from our online
              interviews. Qualitative ones will be collected through real
              interviews. Second task,{" "}
              <span className="Bolder">write two distinct interviews</span> to
              understand the needs of the travellers and hopefully validate some{" "}
              <span className="Bolder">hypothesis</span>, or not. With a total
              of 196 participants, this is a sample of what we found :
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <div className="ContextImagesEnd">
              <img src={require("../images/study-thrilly/context_2.png")} />

              <img src={require("../images/study-thrilly/context_3.png")} />
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div id="Problem" className="Separator"></div>
          <div className="StudyTitles">
            <h2>The problem</h2>
          </div>
          <div className="StudyImages">
            <img src={require("../images/study-thrilly/diamond_3.png")} />
          </div>
          <div className="ProblemForm">
            <h3>
              How to help people find accessible and authentic experiences when
              most of touristic places are overrated and completely overwhelmed
              ?
            </h3>
          </div>
        </ScrollAnimation>
        <div className="ProblemTexts">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4</ScrollAnimation>"
          >
            <p>
              After <span className="Bolder">analyzing</span> the collected
              data, the third task was to do a{" "}
              <span className="Bolder">Users Journey</span> to define where are
              exactly the <span className="Bolder">pain points</span> during
              user’s travels and ideate from here on{" "}
              <span className="Bolder">how</span> we could fix them. Mapping the{" "}
              <span className="Bolder">How Might We</span> solutions on the
              Users Journey was very helpfull for us to take a{" "}
              <span className="Bolder">step back</span> and have a better{" "}
              <span className="Bolder">product overview</span>.{" "}
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4</ScrollAnimation>"
          >
            <p>
              We <span className="Bolder">coupled</span> this by{" "}
              <span className="Bolder">researching</span> the lasts{" "}
              <span className="Bolder">ratings and comments</span> from
              customers through <span className="Bolder">Paris</span> most
              knowns and visited places including monuments and restaurants just
              to be sure that the problems we found{" "}
              <span className="Bolder">actually exists</span>. The result was
              that <span className="Bolder">clear</span> for us that we{" "}
              <span className="Bolder">didn't prioritize</span> at all beacause
              one of the problematics was{" "}
              <span className="Bolder">far away</span> from the others.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce="false"
          duration="1.4</ScrollAnimation>"
        >
          <div className="ProblemImages">
            <img src={require("../images/study-thrilly/problem_img_1.png")} />

            <img src={require("../images/study-thrilly/problem_img_2.png")} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce="false"
          duration="1.4</ScrollAnimation>"
        >
          <div id="Users" className="Separator"></div>
          <div className="StudyTitles">
            <h2>The potential users</h2>
          </div>
          <div className="ProblemTexts">
            <p>
              There is <span className="Bolder">two possible users</span> for
              our solution. The <span className="Bolder">host</span> that
              provide the experience and the{" "}
              <span className="Bolder">guest</span> that is looking for
              something new and engaging. We decided to{" "}
              <span className="Bolder">quickly switch</span> from our personna's
              to these synthetic and more understandable tables just to be
              clearer about the most importants facts around our users :
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce="false"
          duration="1.4</ScrollAnimation>"
        >
          <div className="PoUsersImages">
            <img src={require("../images/study-thrilly/pousers_1.png")} />

            <img src={require("../images/study-thrilly/pousers_2.png")} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce="false"
          duration="1.4</ScrollAnimation>"
        >
          <div id="Solution" className="Separator"></div>
          <div className="StudyTitles">
            <h2>Crafting the solution</h2>
          </div>
          <div className="StudyImages">
            <img src={require("../images/study-thrilly/diamond_4.png")} />
          </div>
        </ScrollAnimation>
        <div className="SolutionStudy1">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4</ScrollAnimation>"
          >
            <p>
              We started by <span className="Bolder">defining scenarios</span>,
              how much screen we need and what should be in every screen. We
              left the <span className="Bolder">pencil paper combo</span> to be
              sure that our work will never been{" "}
              <span className="Bolder">lost</span> somewhere, easily{" "}
              <span className="Bolder">customizable</span> and{" "}
              <span className="Bolder">shareable</span> between us. You can find
              a <span className="Bolder">few screens</span> of the complete
              traveler <span className="Bolder">booking scenario</span> bellow.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4</ScrollAnimation>"
          >
            <p>
              The <span className="Bolder">prototype</span> was made with{" "}
              <span className="Bolder">InVision</span> and as you probably know,
              this is not the best tool to{" "}
              <span className="Bolder">retranscribe</span> the final product
              because this tool is used to{" "}
              <span className="Bolder">quickly iterate</span> around ideas and
              not to represent a final product. But because we have to iterate
              quickly and for the user tests purpose,{" "}
              <span className="Bolder">we used it</span> and added{" "}
              <span className="Bolder">more fidelity</span> by using some{" "}
              <span className="Bolder">colors and images</span> to the
              wireframes just to help testers to{" "}
              <span className="Bolder">project themselves</span> into the
              solution.{" "}
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce="false"
          duration="1.4</ScrollAnimation>"
        >
          <div className="SolutionImages">
            <img src={require("../images/study-thrilly/wireframes.png")} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce="false"
          duration="1.4</ScrollAnimation>"
        >
          <div id="Hook" className="Separator"></div>
          <div className="StudyTitles">
            <h2>The hook</h2>
          </div>
          <div className="HookImage1">
            <img src={require("../images/study-thrilly/hook_1.png")} />
          </div>
        </ScrollAnimation>

        <div className="ProblemTexts">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4</ScrollAnimation>"
          >
            <p>
              Now that we have <span className="Bolder">enough data</span> about
              the{" "}
              <span className="Bolder">market our targets and their needs</span>
              , we can start to craft our{" "}
              <span className="Bolder">branding</span>. The first thing we made
              here is to <span className="Bolder">choose a name</span> by using{" "}
              <span className="Bolder">insights</span> from our{" "}
              <span className="Bolder">interviews</span> and with{" "}
              <span className="Bolder">our promise</span> as a brand that
              delivers a service. Because we understand what 
              <span className="Bolder">authentic experiences</span> mean for the
              travellers, we found a word that{" "}
              <span className="Bolder">perfectly fit</span> our promise and the
              travellers needs :
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4</ScrollAnimation>"
          >
            <p>
              Branding in certainly not only about name. We have to make a{" "}
              <span className="Bolder">clear statement</span> of our{" "}
              <span className="Bolder">value proposition</span> in{" "}
              <span className="Bolder">one sentence</span> from our initial
              promise thanks to interviews insights. Now that we know{" "}
              <span className="Bolder">who we are</span> and{" "}
              <span className="Bolder">what we do</span>, we can start{" "}
              <span className="Bolder">define ourselves</span> with a{" "}
              <span className="Bolder">logotype</span>. The idea was to
              represent <span className="Bolder">every single actors</span> and
              there <span className="Bolder">environments</span> into the logo
              but most difficult part here was to do something{" "}
              <span className="Bolder">affording</span>. It should definetly
              help people to <span className="Bolder">define</span> what we do
              or even what’s our <span className="Bolder">key feature</span>.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div className="HookImage2">
            <img src={require("../images/study-thrilly/hook_5.png")} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div className="HookImage3">
            <img src={require("../images/study-thrilly/hook_3.png")} />
          </div>
        </ScrollAnimation>

        <div className="HookStudy3">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              Last thing was to find a <span className="Bolder"></span>baseline.
              As I told you previously, we want to start in{" "}
              <span className="Bolder"></span>Paris so we have to formulate it
              in french first. The idea was to find a{" "}
              <span className="Bolder"></span>powerful hook that can trigger
              users and make them try at least one time our service. We found
              during our research that <span className="Bolder"></span>boredom
              is the desease of the 21th century and probably one of the worsts
              things to experience for people.{" "}
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              Prof Wilson from the{" "}
              <span className="Bolder">University of Virginia</span> did what he
              called{" "}
              <span className="Bolder">the electric shock experiment</span>{" "}
              trying to find out if quiet, solo thinking was unpleasant enough
              that people would actually prefer shocking themselves.{" "}
              <span className="Bolder">18 of 42 people</span>, more of them men
              than women, chose to give themselves at least one shock on when
              left alone for <span className="Bolder">15 minutes</span>.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              Because we know our target, we can easily find some of{" "}
              <span className="Bolder">their usages</span>. We know that they
              use <span className="Bolder">social medias</span> a lot and we
              also know that the factors that push them to{" "}
              <span className="Bolder">return</span> are many. Like curiosity,
              the desire to share, discuss for exemple and{" "}
              <span className="Bolder">boredom</span> was widely quoted.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div className="HookImage4">
            <img src={require("../images/study-thrilly/hook_4.png")} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div id="Sofar" className="Separator"></div>
          <div className="StudyTitles">
            <h2>This is how it look, so far</h2>
          </div>
        </ScrollAnimation>
        <div className="ProblemTexts">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              You can find below a{" "}
              <span className="Bolder">video presentation</span> of our project
              with one of the <span className="Bolder">first iterations</span>{" "}
              of our prototype with principle. We tryied to push fidelity
              further to <span className="Bolder">enhance projection</span> by
              avoiding the artboard to arboard prototype but still, this is
              Mid-Fi prototyping. The second video is showing you the{" "}
              <span className="Bolder">last iteration</span> we made but
              unfortunately the Principle trial period{" "}
              <span className="Bolder">has expired</span> so we didn’t edited it
              since last July.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              The things we want to <span className="Bolder">test</span> with
              the final prototype was the{" "}
              <span className="Bolder">booking process</span>. We will have
              insights soon to <span className="Bolder">reiterate</span> on it.
              You can also find a sample of our{" "}
              <span className="Bolder">style guide</span> that we grow everytime
              we iterate on <span className="Bolder">features</span> we want to
              test.
            </p>
          </ScrollAnimation>
        </div>

        <div className="ContainerVideos">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <div className="VideosStudy">
              <iframe
                src="https://drive.google.com/file/d/14xUIY6-Kp45L5M7xqr-2wez25Bfsnf1N/preview"
                width="640"
                height="480"
              ></iframe>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <div className="VideosStudy">
              <iframe
                src="https://drive.google.com/file/d/1jqetC65lwkHRTv--V_UMRR92QZch1hss/preview"
                width="640"
                height="480"
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div className="StyleguideStudy">
            <img src={require("../images/study-thrilly/styleguide.png")} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div id="Next" className="Separator"></div>
          <div className="StudyTitles">
            <h2>What's next</h2>
          </div>
          <div className="StudyImages">
            <img src={require("../images/study-thrilly/diamond_5.png")} />
          </div>
        </ScrollAnimation>
        <div className="NextStudy">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              In terms of product, we are now working on{" "}
              <span className="Bolder">refining the UI</span> and{" "}
              <span className="Bolder">key features</span> with the travellers
              and hosts <span className="Bolder">scenarios</span>. We are also
              working to enhance the <span className="Bolder">branding</span>{" "}
              through <span className="Bolder">animations</span> wich is now
              fully a part of a branding today.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              Brand animations can now be added to prototypes and that’s a good
              news because we want to use Framer X to{" "}
              <span className="Bolder">enhance fidelity</span> a little more and
              we can add them into the prototype. The animation export from
              Lottie should definetly help us to do that easily. The real
              challenge here is to create a motion that{" "}
              <span className="Bolder">make sense</span> with our{" "}
              <span className="Bolder">brand</span> and{" "}
              <span className="Bolder">strategy</span>.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce="false"
            duration="1.4"
          >
            <p>
              At the end, we have to make a{" "}
              <span className="Bolder">landing page</span> just to start
              developing a web presence. The main strategy behind is to{" "}
              <span className="Bolder">recruit beta testers</span> and to share
              lasts updates about the solution or the company. Things could
              evolve quickly but at this moment in time, this is what we plan to
              do. Once all this tasks done, we have to{" "}
              <span className="Bolder">restart the process</span> to iterate on
              new emerging problems. Shaping a good and viable product is a
              every day task, definetly not a{" "}
              <span className="Bolder">one shot done</span>.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce="false" duration="1.4">
          <div className="StudyImages">
            <img src={require("../images/study-thrilly/diamond_6.png")} />
          </div>
        </ScrollAnimation>
        <div onClick={scrollToTop} id="backToTop" className="bTT">
          <p>
            <span
              role="img"
              aria-label=":backtotop:"
              data-balloon-pos="left"
              className="EmojiTop"
            >
              {" "}
              🎈{" "}
            </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
