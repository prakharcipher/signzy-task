import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class MidBody extends Component {
	render() {
		return (
				<Row>
					<Col lg={6} xs={12} style={{backgroundColor: 'red'}}>1</Col>
					<Col lg={6} xs={12} style={{backgroundColor: 'blue'}}>2</Col>
				</Row>
			)
	}
}