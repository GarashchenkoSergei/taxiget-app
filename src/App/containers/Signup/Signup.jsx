import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { actions } from "./store/duck";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  signUp: (value) => dispatch(actions.signUp(value)),
});

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    surname: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = (e) => {
    e.preventDefault();
    const userData = this.state;
    const { email, password, name, surname } = this.state;
    const { signUp } = this.props;

    email && password && name && surname && signUp(userData);
  };

  render() {
    const { email, password, name, surname } = this.state;

    return (
      <>
        <div className="auth-content__signup">
          <h2 className="auth-content__login-title">Sign Up</h2>
          {/* <p className="auth-content__login-desc">
            Already have an account? Go to{' '}
            <a
              className="login-desc__link"
              // onClick={}
            >
              Log in
            </a>{' '}
            page.
          </p> */}
          <form
            className="auth-content__login-form"
            onSubmit={this.signup}
          >
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              size="28"
              value={name}
              onChange={this.handleChange}
            />
            <label htmlFor="surname">Second name:</label>
            <input
              id="surname"
              type="text"
              name="surname"
              size="28"
              value={surname}
              onChange={this.handleChange}
            />
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
            <Button type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
