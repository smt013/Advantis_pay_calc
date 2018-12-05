import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
export default class Login extends Component {
	constructor(props) {

		super(props)

		this.state = {
			username: '',
			password: ''
		}
	}

	handleUsername (e) {
		this.setState({
			username : e.target.value
		})
	}

	handlePassword (e) {
		this.setState({
			password : e.target.value
		})
	}

	render() {
		return (
			<div>
				<h1> Login </h1>
				<form>
					<FormGroup controlId="formBasicText">

						<ControlLabel> Username </ControlLabel>
						<FormControl
							type="text"
							value={this.state.value}
							placeholder="username"
							onChange={this.handleUsername}
						/>
					</FormGroup>
				</form>

				<form>
					<FormGroup controlId="formBasicText">

						<ControlLabel> Password </ControlLabel>
						<FormControl
							type="text"
							value={this.state.value}
							placeholder="password"
							onChange={this.handlePassword}
						/>
					</FormGroup>
				</form>
			</div>
			)
	}
}