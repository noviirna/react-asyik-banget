import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import { fetchAlbumList } from "./store/action";

import axios from "axios";

import Main from "./container/Main";
import LoginPage from "./container/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./container/LandingPage";
import NotFound from "./container/404";

import PrivateRoute from "./components/PrivateRoute";

export default class App extends Component {
  fetchAlbumDetail = albumID => {
    axios({
      method: "GET",
      url: `https://theaudiodb.com/api/v1/json/195003/album.php/?m=${
        this.props.match.params.id
      }`
    })
      .then(({ data }) => {
        console.log(data.album[0]);
        setTimeout(() => {
          this.setState((state, props) => {
            return { detailAlbum: data };
          });
        }, 2000);
      })
      .catch(error => {
        this.setState((state, props) => {
          return { isError: true };
        });
      });
  };
  componentWillMount() {}
  componentDidMount() {}

  render() {
    const { isLogin, allAlbum, isError } = store.getState();
    return (
      <Provider store={store}>
        <div className="h-100 d-flex flex-column">
          <Router>
            <Navbar />
            <Switch>
              <PrivateRoute
                exact
                path="/album"
                component={Main}
                data={{
                  fetchAlbumList,
                  isLogin,
                  allAlbum,
                  isError
                }}
              />
              <PrivateRoute
                exact
                path="/album/:id"
                component={Main}
                data={{
                  isLogin
                }}
              />
              <Route
                exact
                path="/login"
                render={props => (
                  <LoginPage
                    {...props}
                    data={{ isLogin: store.getState("isLogin").isLogin }}
                  />
                )}
              />
              <Route exact path="/" component={LandingPage} />} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

/**
 * PAKAI FUNCTION CARANYA SEPERTI INI
 *
 * INI MOCK DATA
 * let mockData = ["lebaran", "tahun baru"];
 *
 * INI ROOT NYA
 * function App() {
 *  let state = {
 *  data: "hello"
 *  };
 *  return (
 *   <div className="container-fluid h-100 border p-5">
 *    <center>
 *      <h1>List of Indonesian Holiday in 2018</h1>
 *      {state.data}
 *    </center>
 *    <div>
 *     <ul className="list-group">
 *       {mockData.map((md, i) => (<HolidayList data={md} key={i} />))}
 *     </ul>
 *     </div>
 *   </div>
 *  );
 * }
 *
 * INI KOMPONEN NYA
 * const HolidayList = ({ data }) => ( <li className="list-group-item my-1">{data}</li>);
 *
 * INI ROOT NYA DI EXPORT SUPAYA BISA KE LOAD SAMA REACT NYA
 * export default App;
 */
