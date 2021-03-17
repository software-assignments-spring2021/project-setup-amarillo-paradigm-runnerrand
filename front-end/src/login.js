import React from 'react'

import './login.css'


class login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: null,
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    
    render() {
      return (
        
        <article className="login_main">
            <form >
                <h1>Hello {this.state.username} {this.state.password}</h1>
                <p className="slogan">Slogan...</p>
                <p className="question titles">Email:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p className="question titles">Password:</p>
                <input
                    type='text'
                    name='password'
                    onChange={this.myChangeHandler}
                />
            </form>
            <button onClick={handle_login}>Login In</button>
            <button onClick={handle_signup}>Sign Up</button>
        </article>
            
        );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));



  
  export default login
