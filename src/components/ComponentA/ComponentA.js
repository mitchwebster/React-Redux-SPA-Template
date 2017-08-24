import React, { Component } from 'react';
import { connect } from 'react-redux';
import { basicGetRequest } from '../../actions/BasicHttp/actions.js';
import { setLoading } from '../../actions/ComponentA/actions.js';
import { changeRoute } from '../../actions/Routing/actions.js';
import './ComponentA.css';

class ComponentA extends Component {
	constructor(props) {
		super(props);
		this.makeRequest = this.makeRequest.bind(this);
		this.goToOther = this.goToOther.bind(this);
	}

	makeRequest(event) {
		this.props.setLoading(true);
    this.props.basicGetRequest();
  }

	goToOther(event) {
		this.props.changeRoute("/other");
	}

  render() {
		var isLoadingText = this.props.componentA.isLoading ? "LOADING..." : "";
    return (
			<div>
				<div className="header">
					<h1>Sample Component A</h1>
					<h3>{isLoadingText}</h3>
					<button onClick={this.makeRequest}>Make GET Request</button>
					<button onClick={this.goToOther}>Switch Pages</button>
				</div>

	    	<div className="sample-text">{this.props.componentA.text}</div>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    componentA: state.componentA
  };
}

export default connect(mapStateToProps, { basicGetRequest, setLoading, changeRoute })(ComponentA);
