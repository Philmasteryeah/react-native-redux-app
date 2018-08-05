import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './login';
import Home from './home';

class Application extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Home />;
        } else {
            return <Login />;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(Application);