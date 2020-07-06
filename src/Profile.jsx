import React from "react";
import { withAuth } from "./AuthContext";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class Profile extends React.Component {
  static propTypes = {
    navigateTo: PropTypes.func,
  };

  unauthenticate = () => {
    this.props.logOut();
    this.props.navigateTo("login");
  }

  render() {
    return (
      <>
        <Button
          onClick={this.unauthenticate}
          variant="contained"
          color="primary"
        >Log out</Button>
      </>
    );
  }
}

export const ProfileWithAuth = withAuth(Profile);
