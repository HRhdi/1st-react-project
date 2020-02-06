import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className='Hero'>

      <div className='Animation'>
        
      </div>
      <div className='HeroTexts'>

        <h1>I’m <span className ='Name'>Hafid</span>, a Product Designer mainly focused on  delivering useful products that people will enjoy using and well crafted Design Systems !</h1>

        <p>Currently spreading <span role='img' aria-label=":love:" data-balloon-pos="up" className='Emojis'> ❤️ </span><a href='/#'>@MaybeYou</a></p>

        <p>Previously <span role='img' aria-label=":rockin:" data-balloon-pos="up" className='Emojis'> 💪 </span><a href="https://www.lajavaness.com/">@LaJavaness</a> proudly shipped on HypnoVR, Origins.Earth, Handiguide and more</p>
      
      </div>

      <div className='Cards'>
        <Card 
          title='Thrilly ➞'
          section='Study case'
          image= {require('../images/logo-thrilly.png')}/>
        <Card 
          title='Portfolio ➞'
          section='Study case - Refining ...'
          image= {require('../images/logo-thrilly.png')}/>
        <Card 
          title='Thrilly ➞'
          section='Study case'
          image= {require('../images/logo-thrilly.png')}/>
      </div>

      <div className='StackContainer'>

        <p>Continuously expanding my stack to be involved in every product’s life-cycle processes</p>

        <div className='Stack'></div>

      </div>

      <div className='GetInTouch'>

        <h2>But, what about you ?</h2>

        <p>
          <a href="mailto:hello@rhdi.fr">Let's get in touch <span role='img' aria-label=":mail:" data-balloon-pos="down">📮</span></a>
        </p>
        
      </div>
      
    </div>
  </Layout>
)

export default IndexPage
