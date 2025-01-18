import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {

  const { loading, posts } = useContext(AppContext);
 
  return (
    <div className="flex flex-col gap-y-10 my-4">
      {
        loading ? <Spinner /> : (
          !posts?.length ?
            (
              <div className="min-h-[80vh] w-full flex justify-center items-center">
                <p className="text-center font-bold text-3xl">No Post Found</p>
              </div>
            ) :
            (
              posts.map((post) => (
                <div key={post.id}>
                  <p>{post.title}</p>
                  <p>
                    By <span>{post.auther}</span> on <span>{post.category}</span>
                  </p>
                  <p>Posted on {post.date}</p>
                  <p>{post.content}</p>
                  <div>
                    {
                    post.tag?.map((tag, ind)=>{
                     return <span key={ind}>{`#${tag}`}</span>
                    })
                    }
                  </div>
                </div>
              ))
            )
        )
      }
    </div>
  )
}

export default Blogs