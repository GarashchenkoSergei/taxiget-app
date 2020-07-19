import React from "react";
import Login from "./App/containers/Login";
import Profile from "./App/containers/Profile";
import Signup from "./App/containers/Signup";
import Map from "./Map.jsx";
import { Header } from "./Header.jsx";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute"

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.loginReducer.isLoggedIn }))(App);
