import React, { Component } from "react";
import { fetchAlbumDetail, resetAlbumListAndDetail } from "../../store/action";
import { connect } from "react-redux";

class Detail extends Component {
  componentDidMount() {
    this.props.resetAlbumListAndDetail();
    setTimeout(() => {
      this.props.fetchAlbumDetail(this.props.computedMatch.params.id);
    }, 5000);
  }

  render() {
    console.log(this.props.detailAlbum, "disini senang disana senagn");
    if (this.props.isError) {
      console.log("1");
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

              <p>Sorry! the data you are looking for is unavailable...</p>
            </center>
          </div>
        </div>
      );
    } else if (this.props.detailAlbum.length === 0) {
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
    } else {
      return (
        <div className="container-fluid d-flex flex-column flex-grow-1 p-5 bg-ulang">
          <div className="container border p-5 flex-grow-1 bg-light">
            <center>
              <p>{JSON.stringify(this.props.detailAlbum)}</p>
            </center>
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
