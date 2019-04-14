import React, {Component} from 'react';
import {Row, Col, Nav, Form} from 'react-bootstrap';
import MidBody from './MidBody';

export default class App extends Component {
	render() {
		return (
				<Row>
					<Col style={{backgroundColor: '#2E3336', color: 'white', zIndex: '30'}} lg={2}>
						<img style={{width: '100%', display: 'block', margin: 'auto'}} alt="logo" src="https://lord.github.io/slate/images/logo.png" /><br />
						<Form.Control style={{width: '90%', margin: 'auto', backgroundColor: '#2E3336', color: 'gray'}} type="text" placeholder="%search%" /><br/>
						<Nav defaultActiveKey="/home" className="flex-column">
						  <ul style={{listStyleType: 'none'}}>
						  	<li>Introduction</li>
							  <li>Authentication</li>
							  <li>Kittens</li>
							  <li>Errors</li>
						  </ul>
						</Nav>
					</Col>
					<Col lg={10} xs={12}><MidBody /></Col>
				</Row>
			)
	}
}