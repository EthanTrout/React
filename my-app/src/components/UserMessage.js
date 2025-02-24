import React from 'react'

function UserMessage(props) {
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
            </div>
        ) : (
            <p>Please Log in</p>
        )}
    </div>
  )
}

export default UserMessage
