import React from 'react';
import Login from './Login.jsx';
import {Profile} from './Profile.jsx';
import {Map} from './Map.jsx';
import {Header} from './Header.jsx';
import './App.css';

class App extends React.Component {
  state = { currentPage: 'login' };

  navigateTo = (page) => {
    this.setState({currentPage: page});
  };

  pages = {
    login: <Login navigateTo={this.navigateTo}/>,
    map: <Map/>,
    profile: <Profile/>,
  };

  render() {
    const navItems = Object.keys(this.pages);

    return <>
      <Header navItems={navItems} navigateTo={this.navigateTo}/>
      <main>
        <section>
          {this.pages[this.state.currentPage]}
        </section>
      </main>
    </>
  }
}

export default App;
