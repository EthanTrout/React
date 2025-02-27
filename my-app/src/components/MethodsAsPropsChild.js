import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome to the Site Please Complete steps Below</p>
                <ol>
                    <li>Confirm Email</li>
                    <li>Complete Profile</li>
                    <li> Subscribe to newsletter</li>
                </ol>
                <button onClick={props.handleSignInAndOut}>Sign Out!</button>
            </div>
        ) : (
            <div>
                <p>Please Log in</p>
                <button onClick={props.handleSignInAndOut}>Log in!</button>
            </div>
            
        )}
    </div>
  )
}

export default MethodsAsPropsChild
