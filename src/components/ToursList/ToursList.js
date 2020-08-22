import React, { Component } from "react";
import Tours from "../Tours/Tours";
import { tourData } from "../../tourData";
import "./ToursList.scss";

export default class ToursList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    console.log(id);
    const { tours } = this.state;
    this.setState({
      tours: tours.filter((tour) => tour.id !== id),
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((item) => (
          <Tours key="item.id" item={item} removeTour={this.removeTour}></Tours>
        ))}
      </section>
    );
  }
}
