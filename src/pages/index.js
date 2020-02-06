import React from "react"
import { Link } from "gatsby"
import Tilt from "react-tilt"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import FloatingStack from "../components/floating-stack"
import FloatingHi from "../components/floating-hi"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="Hero">
      <div className="Animation">
        <FloatingHi image={require("../images/hi.png")} />
      </div>

      <div className="HeroTexts">
        <h1>
          I’m <span className="Name">Hafid</span>, a designer mainly focused on
          crafting and delivering useful products that people will enjoy using
          and well-designed systems !
        </h1>

        <p>
          Currently{" "}
          <span
            role="img"
            aria-label=":teamworking:"
            data-balloon-pos="up"
            className="Emojis"
          >
            {" "}
            💪{" "}
          </span>
          <a
            href="https://www.lajavaness.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="Work">&nbsp;@LaJavaness&nbsp;</span>
          </a>{" "}
          proudly shipped on{" "}
          <a
            href="https://www.handiguide.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="Exp1">&nbsp;HandiGuide&nbsp;</span>
          </a>{" "}
          <a
            href="https://hypnovr.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="Exp2">&nbsp;HypnoVR&nbsp;</span>
          </a>{" "}
          <a
            href="https://www.prime-energie-carbone.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="Exp3">&nbsp;Origins.Earth&nbsp;</span>
          </a>{" "}
          and more
        </p>

        <p>
          Looking for a new
          <span
            role="img"
            aria-label=":exciting:"
            data-balloon-pos="up"
            className="Emojis"
          >
            {" "}
            🔥{" "}
          </span>{" "}
          experience
        </p>
      </div>

      <div className="Cards">
        <Tilt className="Tilt" options={{ max: 14, scale: 1.05 }}>
          <Card
            title="React library ➞"
            section="Side project"
            image={require("../images/Library-project.png")}
          />
        </Tilt>
        <Tilt className="Tilt" options={{ max: 14, scale: 1.05 }}>
          <Card
            title="UI Kit ➞"
            section="Freebie"
            image={require("../images/freebie.png")}
          />
        </Tilt>
        <Tilt className="Tilt" options={{ max: 14, scale: 1.05 }}>
          <Link to="study-thrilly">
            <Card
              title="Thrilly ➞"
              section="Case study"
              image={require("../images/logo-thrilly.png")}
            />
          </Link>
        </Tilt>
      </div>

      <div className="StackContainer">
        <p>
          Continuously expanding my stack to be involved in every product’s
          life-cycle processes
        </p>

        <div className="Stack">
          <div className="StackRow1">
            <FloatingStack image={require("../images/logo-sketch.png")} />
            <FloatingStack image={require("../images/logo-figma.png")} />
          </div>

          <div className="StackRow2">
            <FloatingStack image={require("../images/logo-invision.png")} />
            <FloatingStack image={require("../images/logo-principle.png")} />
            <FloatingStack image={require("../images/logo-framer.png")} />
          </div>
          <div className="StackRow3">
            <FloatingStack image={require("../images/logo-ae.png")} />
            <FloatingStack image={require("../images/logo-ai.png")} />
            <FloatingStack image={require("../images/logo-ps.png")} />
          </div>
          <div className="StackRow4">
            <FloatingStack image={require("../images/logo-zeplin.png")} />
            <FloatingStack image={require("../images/logo-react.png")} />
          </div>
        </div>
      </div>

      <div className="GetInTouch">
        <h2>But, what about you ?</h2>

        <div className="CTAbutton">
          <a href="mailto:hafid.rhdi@gmail.com">
            <button>
              <p>Let's get in touch</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
