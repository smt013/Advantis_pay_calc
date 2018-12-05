import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/login/login'
import { Router, Route, Link, BrowserRouter } from 'react-router-dom'

const app = document.getElementById('root')

ReactDOM.render(    
	<BrowserRouter>
		<Login />
	</BrowserRouter>,
app)
