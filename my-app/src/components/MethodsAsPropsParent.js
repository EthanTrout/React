import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLoaded : true,
           isLoggedIn :false,
        }
      }
    handleSignIn=()=>{
      this.setState({
        isLoggedIn:true,
      })
      console.log(this)
    }
    handleSignOut=()=>{
      this.setState({
        isLoggedIn:false,
      })
      console.log(this)
    }
    handleSignInAndOut=()=>{
      this.setState(prevState=>{
        return{
          isLoggedIn: !prevState.isLoggedIn
        }
        
    })
    }
  render() {
    return (
      <div>
        <MethodsAsPropsChild isLoggedIn = {this.state.isLoggedIn} handleSignInAndOut = {this.handleSignInAndOut} />
      </div>
    )
  }
}

export default MethodsAsPropsParent

