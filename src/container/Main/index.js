import React, { Component } from "react";

import List from "./components/List";

export default class Main extends Component {
  componentDidMount() {
    const { fetchAlbumList } = this.props.data;
    setTimeout(() => {
      fetchAlbumList();
    }, 2000);
  }
  render() {
    const { listAlbum, isError } = this.props.data;

    if (listAlbum.length === 0 && isError === true) {
      return (
        <div className="container-fluid h-100 p-5">
          <center>
            <h1>List of Maroon 5 Album</h1>
          </center>
          <div className="container border p-5">
            <center>
              <p>The data is currently unavailable on the API...</p>
            </center>
          </div>
        </div>
      );
    }

    if (listAlbum.length === 0 && isError === false) {
      return (
        <div className="container-fluid h-100 p-5 flex-grow-1">
          <center>
            <h1>List of Maroon 5 Album</h1>
          </center>
          <div className="container border p-5 flex-grow-1">
            <center>
              <div className="my-5">
                <div className="flower-spinner">
                  <div className="dots-container">
                    <div className="bigger-dot">
                      <div className="smaller-dot" />
                    </div>
                  </div>
                </div>
              </div>

              <p>Please wait while we fetch the data ...</p>
            </center>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid h-100 p-5">
        <center>
          <h1>List of Maroon 5 Album</h1>
        </center>
        <div className="row d-flex align-items-center justify-content-center">
          {listAlbum.map((d, i) => (
            <List data={d} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
