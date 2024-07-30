import React from 'react'
import user from "../../assets/user.svg"

const BlogPost = () => {
  return (
    <div className="m-10">
      <div className="text-5xl font-bold">
        Title
      </div>
      <div>
      <img src={user} alt="author" className="w-8 m-4" />
      </div>
    </div>
  )
}

export default BlogPost