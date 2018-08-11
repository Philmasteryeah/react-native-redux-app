import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from "../actions/auth";

class Secured extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }

    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text style={{ fontSize: 27 }}>
                    {`Welcome ${this.props.username}`}
                </Text>
                <View style={{ margin: 20 }} />
                <Button onPress={(e) => this.userLogout(e)} title="Logout" />
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLogout: () => { dispatch(logout()); }
//     }
// }

const mapDispatchToProps = (dispatch)=> (
    bindActionCreators(actions, dispatch) 
)

export default connect(mapStateToProps, mapDispatchToProps)(Secured);