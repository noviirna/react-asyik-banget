import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbumList, resetAlbumListAndDetail } from "../../store/action";
import Card from "./components/Card";

class Main extends Component {
  componentDidMount() {
    this.props.resetAlbumListAndDetail();
    setTimeout(() => {
      this.props.fetchAlbumList();
    }, 2000);
  }
  render() {
    const { listAlbum, isError } = this.props;

    if (listAlbum.length === 0 && isError === true) {
      return (
        <div className="container-fluid d-flex flex-column h-100 flex-grow-1 p-5 bg-ulang animated fadeIn">
          <div className="container border p-5 flex-grow-1 bg-light animated zoomIn delay-1s">
            <center className="ball">
              <p>The data is currently unavailable on the API...</p>
            </center>
          </div>
        </div>
      );
    }

    if (listAlbum.length === 0 && isError === false) {
      return (
        <div className="container-fluid d-flex flex-column h-100 p-5 flex-grow-1 bg-ulang animated fadeIn">
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
      <div className="container-fluid p-5 bg-ulang animated fadeIn">
        <center className="animated fadeIn zoomIn delay-1s">
          <h1 className="animated flipInX delay-1s">List of Maroon 5 Album</h1>
        </center>
        <div className="row d-flex align-items-center justify-content-center animated slideInUp">
          {listAlbum.map((d, i) => (
            <Card data={d} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ listAlbum, isError }) => {
  return {
    listAlbum,
    isError
  };
};

const mapDispatchToProps = { fetchAlbumList, resetAlbumListAndDetail };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
