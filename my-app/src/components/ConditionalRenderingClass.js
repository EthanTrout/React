import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLoaded : false,
           isLoggedIn :true,
        }
      }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading...'}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the Site Please Complete steps Below</p>
                <ol>
                    <li>Confirm Email</li>
                    <li>Complete Profile</li>
                    <li> Subscribe to newsletter</li>
                </ol>
            </div>
        ) : (
            <p>Please Log in</p>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass

