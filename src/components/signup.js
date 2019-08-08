import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/actions/authaction'
class Signup extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }
    emailFormHandler(event) {
        this.setState({
            email: event.target.value
        })
    }
    nameFormHandler(event) {
        this.setState({
            name: event.target.value
        })
    }
    passwordFormHandler(event) {
        this.setState({
            password: event.target.value
        })
    }
    signup() {
        this.props.signupAction(this.state.email, this.state.password, this.state.name );
    }
    render() {
        return (
            <div>
                <h1>Hello Signup</h1>
                Email: <input type="text" name='email' value={this.state.email} onChange={this.emailFormHandler.bind(this)} /><br />
                Password: <input type="password" name='password' value={this.state.password} onChange={this.passwordFormHandler.bind(this)} /><br />
                User Name: <input type="text" name='userName' value={this.state.name} onChange={this.nameFormHandler.bind(this)} /><br />
                <button onClick={this.signup.bind(this)}>Signup</button>
                {
                    (this.props.loader === true)?(
                        <h1>Loading...</h1>
                    ): null
                }

            </div>
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
        signupAction: (email, password, name) => {
            dispatch(signup(email, password , name))
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);













































