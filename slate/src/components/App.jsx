import React, {Component} from 'react';
import {Row, Col, Nav, Form, Tabs, Tab} from 'react-bootstrap';
import MidBody from './MidBody';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToAnchor } from 'react-scrollable-anchor'
import './style.css';

const data = [
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: 'javascript'
		}
	}

	handleClick = (e) => {
		const listType = e.target.innerHTML;
		if(listType === 'Introduction')
			goToAnchor('intro', false);
		else if(listType === 'Authentication')
			goToAnchor('auth', false);
		else
			goToAnchor('kitten', false);
	}

	render() {
		const {key} = this.state;
		let jsAuth = (
				<div style={{padding: '13px 2em', color: 'white', backgroundColor: '#1E2224'}}>
					<p><span className="keyword">const</span> kittn = require(<span className="str">'kittn'</span>)</p>
					<p><span className="keyword">let</span> api = kittn.authorize('meowmeowmeow')</p>
				</div>
			);

		let jsKitten = (
				<div style={{padding: '13px 2em', color: 'white', backgroundColor: '#1E2224'}}>
					<p><span className="keyword">const</span> kittn = require(<span className="str">'kittn'</span>)</p>
					<p><span className="keyword">let</span> api = kittn.authorize(<span className="str">'meowmeowmeow'</span>)<br /><span className="keyword">let</span> kittens = api.kittens.get();</p>
				</div>
			);

		let pyAuth = (
				<div style={{padding: '13px 2em', color: 'white', backgroundColor: '#1E2224'}}>
					<p><span className="keyword-py">import</span> kittn</p>
					<p>api = kittn.authorize(<span className="str">'meowmeowmeow'</span>)</p>
				</div>
			);

		let pyKitten = (
				<div style={{padding: '13px 2em', color: 'white', backgroundColor: '#1E2224'}}>
					<p><span className="keyword-py">import</span> kittn</p>
					<p>api = kittn.authorize(<span className="str">'meowmeowmeow'</span>)<br />api.kittens.get();</p>
				</div>
			);
		return (
				<Row>
					<Col className="hidden-xs" style={{backgroundColor: '#2E3336', color: 'white', zIndex: '30', position: 'fixed', left: '0', top: '0', height: '100vh'}} lg={2}>
						<img style={{width: '100%', display: 'block', margin: 'auto'}} alt="logo" src="https://lord.github.io/slate/images/logo.png" /><br />
						<Form.Control style={{width: '90%', margin: 'auto', backgroundColor: '#2E3336', color: 'gray'}} type="text" placeholder="%search%" /><br/>
						<Nav defaultActiveKey="/home" className="flex-column">
						  <ul style={{listStyleType: 'none'}} onClick={this.handleClick}>
						  	<li value="intro">Introduction</li>
							  <li value="auth">Authentication</li>
							  <li value="kitten">Kittens</li>
						  </ul>
						</Nav>
					</Col>
					<Col lg={{size: 10, offset: 2}} xs={12} >
						<Row>
						<ScrollableAnchor id={'intro'}>
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
							</ScrollableAnchor>
							<Col style={{backgroundColor: '#2E3336'}} lg={6} xs={12}>
								<Tabs style={{position: 'fixed', right: '0', top: '0', width: '41.5%'}} defaultActiveKey={this.state.key} id="uncontrolled-tab-example" onSelect={key => this.setState({ key })}>
								  <Tab eventKey="javascript" title="JavaScript">
								  </Tab>
								  <Tab eventKey="python" title="Python">
								  </Tab>
								</Tabs>
							</Col>
						</Row>
						<Row>
						<ScrollableAnchor id={'auth'}>
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
							</ScrollableAnchor>
							<Col style={{backgroundColor: '#2E3336', paddingLeft: '0'}} lg={6} xs={12}>
								<div style={{marginTop: '10%'}}>
									<p style={{backgroundColor: '#191D1F', color: '#EEEEEE', padding: '13px 2em', margin: '0'}}>To authorize, use this code:</p>
									{/*<div style={{padding: '13px 2em', color: 'white', backgroundColor: '#1E2224'}}>
										<p><span className="keyword">const</span> kittn = require(<span className="str">'kittn'</span>)</p>
										<p>let api = kittn.authorize('meowmeowmeow')</p>
									</div>*/}
									{key === 'javascript' ? jsAuth : pyAuth}
									<p style={{backgroundColor: '#191D1F', color: '#EEEEEE', padding: '13px 2em'}}>Make sure to replace <em>meowmeowmeow</em> with your API key.</p>
								</div>
							</Col>
						</Row>
						<Row>
						<ScrollableAnchor id={'kitten'}>
							<Col style={{backgroundColor: '#f2f2f2'}} lg={6} xs={12}>
								<h3 style={{padding: '1%', backgroundColor: 'white', border: '1px solid #ccc'}} >Kittens</h3>
								<h5 style={{padding: '4%'}}>Get All Kittens</h5>
								<p style={{padding: '0 4% 4% 4%'}}>The endpoint retrieves all kittens.</p>
								<h5 style={{padding: '4% 4% 0 4%'}}>HTTP Request</h5>
								<code style={{padding: '0 4% 4% 4%'}}>GET http://example.com/api/kittens</code>
								<br />
								<div style={{padding: '4%'}}>
									<h5>Query Parameters</h5>
									<table>
										<thead>
											<tr>
												<th>Parameter</th>
												<th>Default</th>
												<th>Description</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>include_cats</td>
												<td>false</td>
												<td>If set to true, the result will also include cats.</td>
											</tr>
											<tr>
												<td>available</td>
												<td>true</td>
												<td>If set to false, the results will include kittens that have already been adopted.</td>
											</tr>
										</tbody>
									</table><br />
									<aside className="notice-green">
										&#10003; Remember -- A happy kitten is an authenticated kitten!
									</aside>
								</div>			
							</Col>
							</ScrollableAnchor>
							<Col style={{backgroundColor: '#2E3336', paddingLeft: '0'}} lg={6} xs={12}>
								<div style={{marginTop: '15%'}}>
									{/*<div style={{padding: '13px 2em', color: 'white', backgroundColor: '#1E2224'}}>
										<p><span className="keyword">const</span> kittn = require(<span className="str">'kittn'</span>)</p>
										<p><span className="keyword">let</span> api = kittn.authorize(<span className="str">'meowmeowmeow'</span>)<br /><span className="keyword">let</span> kittens = api.kittens.get();</p>
									</div>*/}
									{key=== 'javascript' ? jsKitten : pyKitten}
									<p style={{backgroundColor: '#191D1F', color: '#EEEEEE', padding: '13px 2em', margin: '0'}}>The above command returns JSON structured like this:</p>
									<div style={{padding: '13px 2em', color: 'white', backgroundColor: '#1E2224'}}>
										<pre style={{backgroundColor: '#1E2224', border: '0', color: '#E6DB74'}}>
											{JSON.stringify(data, undefined, 2)}
										</pre>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			)
	}
}