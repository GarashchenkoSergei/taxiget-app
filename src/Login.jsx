import React, { Component } from "react";
import PropTypes from "prop-types";
import { withAuth } from "./AuthContext";
import Button from "@material-ui/core/Button";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  static propTypes = {
    navigateTo: PropTypes.func,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  authenticate = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  };

  goToProfile = () => {
    this.props.navigateTo("profile");
  }

  render() {
    const { email, password } = this.state;

    return (
      <>
        {this.props.isLoggedIn ? (
          <div>
            <p>You are logged in</p>
            <Button
              onClick={this.goToProfile}
              variant="contained"
              color="primary"
            >
              Go to profile
            </Button>
          </div>
        ) : (
          <form onSubmit={this.authenticate}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              size="28"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              size="28"
              value={password}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        )}
      </>
    );
  }
}

export const LoginWithAuth = withAuth(Login);
