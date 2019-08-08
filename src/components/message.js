import React from 'react'
import {connect} from 'react-redux'
import '../custom.css'

class Message extends React.Component{

render(){  
const {message, currentUserUid} = this.props
    return(

(message.sender === currentUserUid)?
 ( <div class="message-orange"><p className="message-content">{message.message}</p></div>):
 ( <div class="message-blue"><p className="message-content">{message.message}</p></div>)
        

    )}}

function mapStateToProps(state){
    return {
        currentUserUid: state.basicInfo.uid,
    }
}
function mapDispatchToProps(dispatch){
    return ({
        // fetchMessages: (currentUserUid , oppositionUid) => {
        //     dispatch(fetchMessages(currentUserUid , oppositionUid))
        // }
    })
}

export default connect (mapStateToProps,mapDispatchToProps)(Message)