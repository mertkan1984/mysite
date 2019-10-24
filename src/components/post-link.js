import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div style={{width:`900px`, borderBottom:`1px solid #eee`, marginBottom:`10px`}}>
 	<h2>{post.frontmatter.title}</h2>
    <p>{post.excerpt}</p>
    <Link style={{fontWeight:`900`}} to={post.frontmatter.path}>
      Devamını Oku
    </Link> 

	
  </div>
)

export default PostLink