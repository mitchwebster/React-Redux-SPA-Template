import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions/Routing/actions.js';
import './ComponentB.css';

class ComponentB extends Component {
	constructor(props) {
		super(props);
		this.makeRequest = this.makeRequest.bind(this);
		this.goHome = this.goHome.bind(this);
	}

	makeRequest(event) {
		this.props.setLoading(true);
    this.props.basicGetRequest();
  }

	goHome(event) {
		this.props.changeRoute("/");
	}

  render() {
    return (
    	<div>
				<div className="header">
					<h1>Sample Component B</h1>
					<button onClick={this.goHome}>Switch Pages</button>
				</div>

			</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { changeRoute })(ComponentB);
