import React, { Component } from "react";
import "./tours.scss";

export default class Tours extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, img, city, name, info } = this.props.item;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img}></img>
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div className="tour-info">
          <h4>{city}</h4>
          <h5>{name}</h5>
          <h6>
            Info:
            <span onClick={this.handleInfo}>
              <i class="fas fa-angle-double-down"></i>
            </span>
          </h6>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
