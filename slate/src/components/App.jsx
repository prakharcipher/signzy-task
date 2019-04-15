import React, {Component} from 'react';
import {Row, Col, Nav, Form, Tabs, Tab} from 'react-bootstrap';
import MidBody from './MidBody';
import './style.css';

export default class App extends Component {
	render() {
		return (
				<Row>
					<Col style={{backgroundColor: '#2E3336', color: 'white', zIndex: '30', position: 'fixed', left: '0', top: '0', height: '100vh'}} lg={2}>
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
					<Col lg={{size: 10, offset: 2}} xs={12} >
						<Row>
							<Col style={{backgroundColor: '#f2f2f2'}} lg={6} xs={12}>
								<h3 style={{padding: '1%', backgroundColor: 'white', border: '1px solid #ccc'}} >Introduction</h3>
								<div style={{padding: '4%'}}>
									<p>
										Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.
									</p>
									<p>
										We have language bindings in Shell, Ruby, Python, and JavaScript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.
									</p>
									<p>
										This example API documentation page was created with Slate. Feel free to edit it and use it as a base for your own API's documentation.
									</p>
								</div>
							</Col>
							<Col style={{backgroundColor: '#2E3336'}} lg={6} xs={12}>
								<Tabs style={{position: 'fixed', right: '0', top: '0', width: '41.5%'}} defaultActiveKey="shell" id="uncontrolled-tab-example">
								  <Tab eventKey="shell" title="Shell">
								  </Tab>
								  <Tab eventKey="ruby" title="Ruby">
								  </Tab>
								  <Tab eventKey="python" title="Python">
								  </Tab>
								  <Tab eventKey="javascript" title="JavaScript">
								  </Tab>
								</Tabs>
							</Col>
						</Row>
						<Row>
							<Col style={{backgroundColor: '#f2f2f2'}} lg={6} xs={12}>
								<h3 style={{padding: '1%', backgroundColor: 'white', border: '1px solid #ccc'}} >Authentication</h3>
								<div style={{padding: '4%'}}>
									<p>
										Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our <a href="http://example.com/developers">developer portal</a>.
									</p>
									<p>
										Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:
									</p>
									<p>
										<code>Authorization: meowmeowmeow</code>
									</p>
									<aside className="notice">
										You must replace <code>meowmeowmeow</code> with your personal API key.
									</aside>
								</div>
							</Col>
							<Col style={{backgroundColor: '#2E3336', paddingLeft: '0'}} lg={6} xs={12}>
								<div>
									<p style={{backgroundColor: '#191D1F', color: '#EEEEEE', padding: '13px 2em'}}>To authorize, use this code:</p>
									<div style={{padding: '13px 2em', color: 'white'}}>
										<p><span className="keyword">const</span> kittn = require(<span className="str">'kittn'</span>)</p>
										<p>let api = kittn.authorize('meowmeowmeow')</p>
									</div>
									<p style={{backgroundColor: '#191D1F', color: '#EEEEEE', padding: '13px 2em'}}>Make sure to replace <em>meowmeowmeow</em> with your API key.</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col style={{backgroundColor: '#f2f2f2'}} lg={6} xs={12}>
								<h3 style={{padding: '1%', backgroundColor: 'white', border: '1px solid #ccc'}} >Kittens</h3>
								<h5 style={{padding: '4%'}}>Get All Kittens</h5>
								<p style={{padding: '0 4% 4% 4%'}}>The endpoint retrieves all kittens.</p>
								<h5 style={{padding: '4% 4% 0 4%'}}>HTTP Request</h5>
								<code style={{padding: '0 4% 4% 4%'}}>GET http://example.com/api/kittens</code>
								<div style={{padding: '4%'}}>
									<p>
										Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our <a href="http://example.com/developers">developer portal</a>.
									</p>
									<p>
										Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:
									</p>
									<p>
										<code>Authorization: meowmeowmeow</code>
									</p>
									<aside className="notice">
										You must replace <code>meowmeowmeow</code> with your personal API key.
									</aside>
								</div>			
							</Col>
							<Col style={{backgroundColor: '#2E3336', paddingLeft: '0'}} lg={6} xs={12}>
								<div>
									<p style={{backgroundColor: '#191D1F', color: '#EEEEEE', padding: '13px 2em'}}>To authorize, use this code:</p>
									<div style={{padding: '13px 2em', color: 'white'}}>
										<p><span className="keyword">const</span> kittn = require(<span className="str">'kittn'</span>)</p>
										<p>let api = kittn.authorize('meowmeowmeow')</p>
									</div>
									<p style={{backgroundColor: '#191D1F', color: '#EEEEEE', padding: '13px 2em'}}>Make sure to replace <em>meowmeowmeow</em> with your API key.</p>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			)
	}
}