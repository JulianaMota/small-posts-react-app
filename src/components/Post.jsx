import React, { useEffect, useState } from 'react'
import Button from './Button.jsx'
import './Post.css'

const Post = ({post}) => {
  const [user, setUser] = useState("")
  const [hide, setHide] = useState(false)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?id='+ post.userId)
    .then(res =>res.json())
    .then(data => {setUser(data[0].name)})
  },[])

  const handleChange = () => {
    setHide(true)
  }
  return(
    <div>
      {!hide && 
      <div className="postBox">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>By {user}</p>
        <Button handleChange={handleChange}/>
      </div>}
    </div>
  )
}

export default Post;