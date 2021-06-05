//Importing the React object.
import React from 'react';


//Creating a component that will serve as a login form.
class Contact extends React.Component {
  constructor(props) {
    super(props);
    //The state will hold the appropriate password to enter to go past the login form.
    this.state = {
      password: 'phalanx',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    //The inputted password is collected from the form with 'type="password".
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let login = (
      //The event listener will trigger the `authorize(e) {}` function upon submission of form.
      <form onSubmit={this.authorize} action="#">
      <input
      type="password"
      placeholder="Password"
      />
      <input
      type="submit"
      />
      </form>
      );
      let contactInfo = (
<ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      )
    return (
      //Use of ternary operators will determine the title of the page & whether to expose the login form or the contact info.
      <div id="authorization">
        <h1>{this.state.authorized === true ? 'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized === true ? contactInfo : login}
      </div>
    );
  }
}


export default Contact;