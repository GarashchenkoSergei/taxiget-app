import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { actions } from '../Login/store/duck';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logOut: (value) => dispatch(actions.logOut(value)),
});

class Profile extends React.Component {
  state = {
    cardNumber: '',
    valid: '2020-07',
    name: '',
    cvc: '',
  };

  logout = () => {
    const { logOut } = this.props;

    logOut();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendPaymentInfo = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { cardNumber, valid, name, cvc } = this.state;

    return (
      <>
        <div className="profile-page">
          <div className="profile-content">
            <h2 className="profile-content__title">Profile</h2>
            <p className="profile-content__subtitle">Payment information</p>
            <form className="topbar-content__payment-form" onSubmit={this.sendPaymentInfo}>
              <div className="payment-form__inner">
                <div className="payment-form__block">
                  <label htmlFor="card-number">Card number:</label>
                  <input
                    id="card-number"
                    type="text"
                    name="card-number"
                    size="19"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="valid">Valid through:</label>
                  <input
                    id="valid"
                    name="valid"
                    type="month" 
                    min="2020-07"
                    value={valid}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="payment-form__block">
                <label htmlFor="name">Card number:</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    size="28"
                    placeholder="USER NAME"
                    value={name}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="cvc">CVC:</label>
                  <input
                    id="cvc"
                    name="cvc"
                    type="text" 
                    size="3"
                    value={cvc}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </div>
          <div className="profile-footer">
            <Button
              onClick={this.logout}
              variant="contained"
              color="primary"
            >
              Log out
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
