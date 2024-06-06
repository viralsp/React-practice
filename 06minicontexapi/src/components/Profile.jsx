import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return ( <h1>PLease Login</h1>)
    
    return (
        <div>

        <h1>hello {user.username}</h1>
        <h1>your password {user.password}</h1>
        </div>
    )
}

export default Profile
