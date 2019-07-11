import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import About from "./container/About";
import AlbumDetail from "./container/AlbumDetail";
import AlbumList from "./container/AlbumList";
import LoginPage from "./container/LoginPage";
import Navbar from "./components/Navbar";
import LandingPage from "./container/LandingPage";
import NotFound from "./container/404";

import PrivateRoute from "./components/PrivateRoute";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="h-100 d-flex flex-column">
          <Router>
            <Navbar />
            <Switch>
              <PrivateRoute
                exact
                {...this.props}
                path="/album"
                component={AlbumList}
              />
              <PrivateRoute
                exact
                {...this.props}
                path="/about"
                component={About}
              />
              } />
              <PrivateRoute
                {...this.props}
                path="/album/:id"
                component={AlbumDetail}
              />
              <Route
                exact
                path="/login"
                render={props => (
                  <LoginPage {...this.props} {...props} />
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
