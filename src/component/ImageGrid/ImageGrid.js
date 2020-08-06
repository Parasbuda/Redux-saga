import React, { Component } from "react"
import "./ImageGrid.css"
import axios from "axios"

const API_KEY = "AsDXl7IxZC2CDJxsOY2Mi8QNTCaEfaQs3Ut6082ATA0"
class ImageGrid extends Component {
  state = {
    images: [],
  }
  componentDidMount() {
    axios
      .get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
      .then((response) => this.setState({ images: response.data }))
      .catch((error) => console.log(error))
  }
  render() {
    return (
      <div className="content">
        <section className="grid">
          {this.state.images.map((image) => {
            return (
              <div
                key={image.id}
                className={`item item-${Math.ceil(image.height / image.width)}`}
              >
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            )
          })}
        </section>
      </div>
    )
  }
}
export default ImageGrid
