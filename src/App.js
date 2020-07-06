import React from "react";
import { LoginWithAuth } from "./Login.jsx";
import { ProfileWithAuth } from "./Profile.jsx";
import Map from "./Map.jsx";
import { Header } from "./Header.jsx";
import "./App.css";
import { withAuth } from "./AuthContext.jsx";

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };

  pages = {
    login: <LoginWithAuth navigateTo={this.navigateTo} />,
    map: <Map />,
    profile: <ProfileWithAuth navigateTo={this.navigateTo} />,
  };

  render() {
    const navItems = Object.keys(this.pages);
    const currentPage = this.state.currentPage;

    return (
      <>
        <Header navItems={navItems} navigateTo={this.navigateTo} />
        <main>
          <section>{this.pages[currentPage]}</section>
        </main>
      </>
    );
  }
}

export default withAuth(App);
