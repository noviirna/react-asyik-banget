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
        <div className="container-fluid d-flex flex-column h-100 flex-grow-1 p-5 bg-ulang">
          <div className="container border p-5 flex-grow-1 bg-light">
            <center>
              <p>The data is currently unavailable on the API...</p>
            </center>
          </div>
        </div>
      );
    }

    if (listAlbum.length === 0 && isError === false) {
      return (
        <div className="container-fluid d-flex flex-column h-100 p-5 flex-grow-1 bg-ulang">
          <div className="container border d-flex flex-column justify-content-center align items-center p-5 flex-grow-1 bg-light">
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
      <div className="container-fluid p-5 bg-ulang">
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
