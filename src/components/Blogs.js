import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {

  const { loading, posts } = useContext(AppContext);
 
  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-10 mt-[66px] mb-[70px] justify-center items-center">
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
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-md mt-[4px]'>
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                  </p>
                  <p className='text-md mt-[4px]'>Posted on {post.date}</p>
                  <p className='text-md mt-[14px]'>{post.content}</p>
                  <div className='flex gap-x-3'>
                    {
                    post.tags?.map((tag, ind)=>{
                     return <span key={ind} className='text-blue-700 underline font-bold text-xs mt-[5px]'>{` #${tag}`}</span>
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