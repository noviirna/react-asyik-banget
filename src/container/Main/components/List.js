import React, { Component } from "react";

export default class List extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="card m-3 p-5">
        <div className="col-12 d-flex flex-column">
          <img
            className="img img-thumbnail rounded-circle"
            src={
              data.strAlbumThumb ||
              data.strAlbumCDart ||
              "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2FpHwZj3tkgC3SJFbuqebBoT7WtVcIwAijEmcbe9VDCauv9ZlG6uS2zjvZQUSO7SfFqa3xjYqGp_L4QbM7%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1"
            }
            alt={data.strAlbumCDart}
          />
          <center className="my-2">
            <h3 className="text-h3 my-1">{data.strAlbum}</h3>
          </center>
          <button className="btn btn-primary">See List of Song</button>
        </div>
      </div>
    );
  }
}
