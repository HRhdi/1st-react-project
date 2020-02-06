import React from "react"
import lottie from "lottie-web"
import thrilly from "../images/Lottie/Thrilly.json"

export default class Thrilly extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: this._container, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: thrilly, // the path to the animation json
    })
  }
  setRef = ref => {
    this._container = ref
  }
  render() {
    return (
      <div>
        <div className="thrilly" ref={this.setRef} />
      </div>
    )
  }
}
