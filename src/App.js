import React from 'react';
import {Login} from './Login.jsx';
import {Profile} from './Profile.jsx';
import {Map} from './Map.jsx';
import {Header} from './Header.jsx';
import './App.css';

const PAGES = {
  login: <Login/>,
  map: <Map/>,
  profile: <Profile/>,
}

const navItems = Object.keys(PAGES);

class App extends React.Component {

  state = { currentPage: '' }

  navigateTo = (page) => {
    this.setState({currentPage: page});
  }

  render() {
    return <>
      <Header navItems={navItems} navigateTo={this.navigateTo}/>
      <main>
        <section>
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </>
  }
}

export default App;
