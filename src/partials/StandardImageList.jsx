import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/postSlice';
import CreatePost from './CreatePost';
import ImageItem from './ImageItem';
import AppModal from './Modal';


const StandardImageList = () => {

  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts?.data)

  useEffect(() => {
    dispatch(getPosts(null))
  }, [dispatch])


  return (

    <>
      <div className='p-2'>

        {
          posts && posts.length > 0 && <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-2 p-2 md:p-4"> {
            posts.map(item => <ImageItem key={item.id} item={item} />)
          }
          </div>
        }

      </div>
    </>
  )
}

export default StandardImageList
