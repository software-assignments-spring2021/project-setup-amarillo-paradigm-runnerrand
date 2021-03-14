import React from 'react';
import './Welcome.css';

const Welcome = (props) => (
  <div>
      return (
          <h1>{props.heading}</h1>
          <p>{props.paragraph}</p>
          <p>{props.paragraph2}</p>
          <div>
            <p onClick={props.action}>Log In</p>
          </div>
        );
  </div>
)
const Section = () => {
    return (
        <section>
            <Welcome heading="Welcome" 
                paragraph="Congrats! You have successfully signed up! An email has been sent to you. Please check and verify your email address! Welcome to RunNErrand!" 
                paragraph2 = "Now you can go back to Login!"
                action={ () => { alert("See what I mean? Javascript is fun!") } }
            />
        </section>
    )
}

ReactDOM.render(<Section />, document.querySelector("#app"))


export default Welcome;