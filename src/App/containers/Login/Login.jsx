import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Signup from "../Signup"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from './store/duck';
import { getIsLoading, getLoadingStatus, getIsLoggedIn } from './store/selectors'

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  isLoggedIn: getIsLoggedIn(state),
  loadingFailed: getLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (value) => dispatch(actions.logIn(value)),
});

class Login extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    surname: '',
    isSignUp: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { logIn } = this.props;
    const { email, password } = this.state;

    email && password && logIn({email, password});
  };

  toggleSignUp = (e) => {
    e.preventDefault();
    if (this.state.isSignUp) {
      this.setState({ isSignUp: false });
    } else {
      this.setState({ isSignUp: true });
    }
  };

  render() {
    const { email, password } = this.state;
    const { isLoggedIn, isLoading, loadingFailed } = this.props;

    return (
      <>
        <div className="auth-page">
          <div className="auth-wrapper">
            {isLoggedIn ? (
              <div className="auth-logged">
                <h2 className="auth-content__login-title">You are logged in</h2>
                <Link to="/profile">
                  <Button variant="contained" color="primary">
                    Go to Profile
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="auth-content">
                {this.state.isSignUp ? 
                (
                  <Signup />
                ) : (
                  <div className="auth-content__login">
                    <h2 className="auth-content__login-title">Log in</h2>
                    <p className="auth-content__login-desc">
                      Don't have an account? Go to
                      {' '}
                      <a
                        className="login-desc__link"
                        onClick={this.toggleSignUp}
                      >
                        Sign up
                      </a>
                      {' '}
                      page.
                    </p>
                    <form
                      className="auth-content__login-form"
                      onSubmit={this.handleSubmit}
                    >
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
                      {isLoading ?
                      <p>Loading...</p> :
                      <Button type="submit" variant="contained" color="primary">
                        Login
                      </Button>
                      }
                      {loadingFailed ? <p>Something went wrong. Please try again.</p> : <></>}
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
