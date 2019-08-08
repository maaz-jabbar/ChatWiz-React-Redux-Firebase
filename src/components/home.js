import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    state = {
        username: ''
    }
    userInput(event) {
        this.setState({
            username: event.target.value
        })
    }

    _changeData() {
        console.log('event called');
        this.props.changeUserName(this.state.username)
    }
    render() {
        return (
            <div>
                <h1>Hello World {this.props.currentUserName}</h1>
                <h1>{this.props.curretUserEmail}</h1>
                <h1>{this.props.currentUserUid}</h1>

                <input type='text' name='username' value={this.state.username} 
                    onChange={this.userInput.bind(this)} />
                <button onClick={this._changeData.bind(this)}>Change</button>
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentUserName: state.basicInfo.username,
        curretUserEmail: state.basicInfo.email,
        currentUserUid: state.basicInfo.uid
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        changeUserName: (newname) => {
            dispatch({ type: 'CHANGE_USERNAME', payload: newname })
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);













































