import React, { Component } from "react";
import { changeArtistDetail, fetchArtistDetail } from "../../store/action";
import { connect } from "react-redux";

class Detail extends Component {
  componentDidMount() {
    this.props.changeArtistDetail();
    setTimeout(() => {
      this.props.fetchArtistDetail();
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
    } else if (!this.props.detailArtist) {
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
    } else {
      console.log(this.props.detailArtist);

      return (
        <div
          className="container-fluid d-flex flex-column flex-grow-1 p-5 animated fadeIn"
          style={{
            backgroundImage: `url(${this.props.detailArtist.strArtistLogo})`,
            repeat: "repeat"
          }}
        >
          <div className="container border p-5 flex-grow-1 bg-light shadow animated zoomIn delay-1s">
            <center className="d-flex flex-column my-1">
              <h1>{this.props.detailArtist.strArtist}</h1>
              <img
                className="img img-thumbnail mx-4 mt-3 grow"
                src={this.props.detailArtist.strArtistThumb}
                alt={this.props.detailArtist.strArtistThumb}
              />
              <small className="my-2 font-weight-light text-muted">
                Picture : {this.props.detailArtist.strArtist}
              </small>
            </center>
            <div className="text-justify">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="text-left">
                  <span className="py-2 my-2 text-info font-weight-bold">
                    Formed in {this.props.detailArtist.intFormedYear}
                  </span>
                </div>
                <div className="text-right">
                  <span className="badge badge-secondary p-2 my-2 mr-3 grow">
                    {this.props.detailArtist.strCountry}
                  </span>
                  <span className="badge badge-dark p-2 my-2 grow">
                    {this.props.detailArtist.strLabel}
                  </span>
                </div>
              </div>
              <p>{this.props.detailArtist.strBiographyEN}</p>
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

const mapDispatchToProps = { changeArtistDetail, fetchArtistDetail };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
