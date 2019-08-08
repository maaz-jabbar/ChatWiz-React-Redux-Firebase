import React from 'react'
import {connect} from 'react-redux'
import '../custom.css'

class UserDetails extends React.Component{
    openChat(userUid,userName){
        this.props.sendUid(userUid,userName)
    }
    render(){
    return(
        <div className='contact' onClick={this.openChat.bind(this, this.props.user.uid,this.props.user.name )}>
             <h2>{this.props.user.name}</h2>
             
             </div>
       
    )}
}

    function mapDispatchToProps(dispatch) {
        return ({
            sendUid : (uid,userName)=>{
                 dispatch(  {type:'CHAT' , payload:{uid, userName} })
            }
         } )
    }
    
    
    export default connect(null,mapDispatchToProps)(UserDetails);
    