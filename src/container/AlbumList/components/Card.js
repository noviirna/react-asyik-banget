import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    let { data } = this.props;
    return (
      <Link className="card m-3 p-5 grow animated flipInY delay-2s" to={"/album/" + data.idAlbum}>
        <div className="col-12 d-flex flex-column animated fadeIn delay-2s">
          <img
            className="img img-thumbnail rounded-circle mb-2 putar-aku delay-3s"
            src={
              data.strAlbumThumb ||
              data.strAlbumCDart ||
              "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2FpHwZj3tkgC3SJFbuqebBoT7WtVcIwAijEmcbe9VDCauv9ZlG6uS2zjvZQUSO7SfFqa3xjYqGp_L4QbM7%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1"
            }
            alt={data.strAlbumCDart}
          />
          <center className="mt-2 text-h3">
            <span className="text-h3 text-dark p-0 m-0">
              {data.strAlbum}&emsp;(
              {data.intYearReleased})
            </span>
            <br />
            <small className="text-muted">
              Click the card to see Album details
            </small>
          </center>
        </div>
      </Link>
    );
  }
}
