import React from 'react'
import {signOut} from "firebase/auth"
import {auth } from "../../firebase/firebaseLocal"
import { Link } from 'react-router-dom'
function FeedHome() {
const logOut=()=>{
  signOut(auth)
}
  return (
    <div>
      <button onClick={logOut}>logOut</button>
<Link to="/user/log-in">Log in</Link>
    </div>
  )
}

export default FeedHome