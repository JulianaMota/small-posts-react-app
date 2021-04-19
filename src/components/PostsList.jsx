import React, { useEffect, useState } from 'react';
import Post from './Post.jsx'

const PostsList = () =>{
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data => {
      setPosts(data)
      setLoading(false)
      setErr(false)
    }).catch(err => {
      setLoading(false)
      setErr(true)
      setPosts([])
    })
  }, [])

  

  return loading ? ( 
  <p>Loading...</p>
  ): err ? (
  <p>We are facing some problems at the moment. Please try again in a few minutes.</p>
  ) : posts.length === 0 ? (null):(
    <ul>
      {posts.map(post => <Post post={post} key={post.id}></Post>)}
    </ul>
  )
}

export default PostsList;