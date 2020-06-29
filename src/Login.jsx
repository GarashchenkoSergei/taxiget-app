import React from 'react'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.navigateTo('map');
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Submit"/>
        </form>
      </>
    )
  }
}

export default Login;