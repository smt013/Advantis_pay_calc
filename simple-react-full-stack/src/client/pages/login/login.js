import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

const firebase = require('../../Firebase.js');

export default class Login extends Component {
	constructor(props) {

		super(props)

		this.state = {
			email: "",
			password: ""
		}
		//this.validateForm = this.validateForm.bind(this)
	}

	handleEmail = (e) => {
		this.setState ({
			email: e.target.value
		})
	}

	handlePassword = (e) => {
		this.setState ({
			password: e.target.value
		})
	}

	handleSubmit = (e) => {
		this.validateForm(this.state.email,this.state.password)
	}
	
	validateForm = (email,password) => {
		debugger
		console.log(email)
		console.log(password)
		firebase.default.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
  			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode + errorMessage)
		})
		var user = firebase.default.auth().currentUser;

			if (user) {
			  // User is signed in.
			} else {
			  // No user is signed in.
			}
		}

	render() {
		return (
			/*<div>
				<form onSubmit={this.handleSubmit}>

					<FormGroup controlId="email" bsSize="large">
						<ControlLabel> Username </ControlLabel>
						<FormControl autoFocus type="text" value={this.state.email} onChange={() => {this.handleEmail}}/>
					</FormGroup>

					<FormGroup controlId="password" bsSize="large">
						<ControlLabel> Password </ControlLabel>
						<FormControl type="text" value={this.state.password} onChange={() => {this.handlePassword}} type="password"/>
					</FormGroup>

					<Button block bsSize="large" disabled={this.validateForm()} type="submit"> Login </Button>

				</form>
			</div>*/

			//<FieldGroup id="formControlsPassword" type="text" label="Password" placeholder="Password"/>
			<div>
				<h1> Login </h1>
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="formBasicText">

						<ControlLabel> Email </ControlLabel>
						<FormControl
							type="text"
							value={this.state.value}
							placeholder="email"
							onChange={this.handleEmail}
						/>
					</FormGroup>

					<FormGroup controlId="formBasicText">

						<ControlLabel> Password </ControlLabel>
						<FormControl
							type="text"
							value={this.state.value}
							placeholder="password"
							onChange={this.handlePassword}
						/>
					</FormGroup>
					<Button block bsSize="large" type="submit"> Login </Button>
				</form>
			</div>
			)
	}
}