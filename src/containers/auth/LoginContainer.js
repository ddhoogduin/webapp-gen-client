import React, {Component} from 'react'
import {connect} from "react-redux";
import {userLogin} from '../../actions/auth/authenticationActions'

import LoginForm from '../../components/pages/authorisation/LoginForm'

class LoginContainer extends Component{

    handleSubmit = (loginValues) =>{
        this.props.userLogin(loginValues);
    };
    render(){
        return(
            <LoginForm
                loginFormErrors={this.props.loginFormErrors}
                onSubmit={this.handleSubmit}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginFormErrors: state.loginFormErrors
    }
}
export default connect(mapStateToProps, {userLogin})(LoginContainer);