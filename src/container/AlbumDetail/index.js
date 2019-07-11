import React, { Component } from "react";
import { fetchAlbumDetail, resetAlbumListAndDetail } from "../../store/action";
import { connect } from "react-redux";

class Detail extends Component {
  componentDidMount() {
    this.props.resetAlbumListAndDetail();
    setTimeout(() => {
      this.props.fetchAlbumDetail(this.props.computedMatch.params.id);
    }, 1000);
  }

  render() {
    if (this.props.isError) {
      return (
        <div className="container-fluid d-flex flex-column h-100 p-5 flex-grow-1 bg-ulang animated fadeIn">
          <div className="container border d-flex flex-column justify-content-center align items-center p-5 flex-grow-1 bg-light animated zoomIn delay-1s">
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

              <p>Sorry! the data you are looking for is unavailable...</p>
            </center>
          </div>
        </div>
      );
    } else if (this.props.detailAlbum.length === 0) {
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
    } else if (this.props.detailAlbum.strDescriptionEN === undefined) {
      console.log(this.props.detailAlbum.strDescriptionEN);
      return (
        <div className="container-fluid d-flex flex-column flex-grow-1 p-5 bg-ulang animated fadeIn">
          <div className="container border p-5 d-flex align-items-center justify-content-center flex-grow-1 bg-light animated zoomIn delay-1s">
            <center>
              <div class="intersecting-circles-spinner my-5">
                <div class="spinnerBlock">
                  <span class="circle" />
                  <span class="circle" />
                  <span class="circle" />
                  <span class="circle" />
                  <span class="circle" />
                  <span class="circle" />
                  <span class="circle" />
                </div>
              </div>
              <p>Sorry! we haven't had this info yet.. Coming soon!</p>
            </center>
          </div>
        </div>
      );
    } else {
      console.log(this.props.detailAlbum);

      return (
        <div className="container-fluid d-flex flex-column flex-grow-1 p-5 bg-ulang animated fadeIn">
          <div className="container border p-5 flex-grow-1 bg-light animated zoomIn delay-1s">
            <center className="d-flex flex-column my-1">
              <h1>{this.props.detailAlbum.strAlbum}</h1>
              <img
                className="img img-thumbnail mx-4 mt-3 grow"
                src={
                  this.props.detailAlbum.strAlbumThumb ||
                  this.props.detailAlbum.strAlbumCDart ||
                  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2FpHwZj3tkgC3SJFbuqebBoT7WtVcIwAijEmcbe9VDCauv9ZlG6uS2zjvZQUSO7SfFqa3xjYqGp_L4QbM7%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1"
                }
                alt={this.props.detailAlbum.strAlbumCDart}
              />
              <small className="my-2 font-weight-light text-muted">
                Release Format : {this.props.detailAlbum.strReleaseFormat}
              </small>
            </center>
            <div className="text-justify">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="text-left">
                  <span className="py-2 my-2 text-info font-weight-bold">
                    Released in {this.props.detailAlbum.intYearReleased}
                  </span>
                </div>
                <div className="text-right">
                  <span className="badge badge-secondary p-2 my-2 mr-3 grow">
                    {this.props.detailAlbum.strMood}
                  </span>
                  <span className="badge badge-dark p-2 my-2 grow">
                    {this.props.detailAlbum.strGenre}
                  </span>
                </div>
              </div>
              <p>{this.props.detailAlbum.strDescriptionEN}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = props => {
  return {
    ...props
  };
};

const mapDispatchToProps = { fetchAlbumDetail, resetAlbumListAndDetail };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
