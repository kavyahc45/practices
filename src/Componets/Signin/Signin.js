import React, { Component } from 'react';
import './Signin.css';
import profile from './profile.jpeg';
import { SocialIcon } from 'react-social-icons';

class Signin extends Component {
render() {
return (
<div className="textcolor">
<h1>Login form</h1>
<img src={profile} />
<form>
<input type="text" placeholder="mobile or Email" className="input"></input><br /><br />
<input type="Password" placeholder="Password" className="input"></input><br /><br />
<input type="checkbox" className="checkbox"></input>
Remember me<br /><br />
<button className="signin"><a href="Signuppage">Signup</a></button>
</form>
Create a new account<br />
or
<div className="icons">
<SocialIcon url="http://twitter.com/jaketrent" />
<SocialIcon url="http://facebook.com/jaketrent" />
<SocialIcon url="http://whatsapp.com/jaketrent" />
</div>


</div>
);
}
}

export default Signin;
