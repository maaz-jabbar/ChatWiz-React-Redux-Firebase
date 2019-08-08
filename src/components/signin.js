import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../store/actions/authaction'
import Apphistory from '../History'
import Load from '../utils/load.gif'
import '../custom.css'
class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    emailFormHandler(event) {
        this.setState({
            email: event.target.value
        })
    }
    passwordFormHandler(event) {
        this.setState({
            password: event.target.value
        })
    }
    signin() {
        this.props.signinAction(this.state.email, this.state.password);
    }
    notMember(){
        Apphistory.push('./signup')
    }
    render() {
        return (
            <div className="login"><div  className="login-screen">
                <div className="app-title">
                <h1>Login to ChatWhiz!</h1>
            </div>

            <div className="login-form">
                <div className="control-group">
                <input placeholder="Username or Email" className="login-field" type="text" name='email' value={this.state.email} onChange={this.emailFormHandler.bind(this)} /><br />
                <label className="login-field-icon fui-user" for="email"></label>
                </div>

                <div className="control-group">
                <input placeholder="Password" className="login-field" type="password" name='password' value={this.state.password} onChange={this.passwordFormHandler.bind(this)} /><br />
                <label className="login-field-icon fui-lock" for="pass"></label>
                </div>

                <button id="login-btn" className="btn" onClick={this.signin.bind(this)}>Login</button>
                <span className="uni">Not a Member yet? <button onClick={this.notMember}>SignUp!</button></span>
                 </div>



                {
                    (this.props.loader === true)?(
                        <img src={Load} className="App-logo" alt="logo" />

                    ): null
                }

            </div></div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        signinAction: (email, password) => {
            dispatch(signin(email, password))
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);













































