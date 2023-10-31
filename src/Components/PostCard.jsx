import React from 'react'
import appwriteService from '../Appwrite/config'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'


function PostCard({ $id, title, featuredImage, content }) {


  return (
    <div>
      <Link to={`/post/${$id}`} className="group w-full">
        <div>
          <img
            className="mb-5 block w-full rounded-lg"
            src={appwriteService.getFilePreview(featuredImage)} alt={title}
          />
        </div>
        <div >
          <h4 className="capitalize mb-5 text-center text-2xl font-bold font-sans text-gray-900">
            <span className='line-clamp-1'>{title}</span>
            <br />
            <span className="mt-2 text-center  text-lg text-gray-500 browser-css line-clamp-4 ">{parse(content)}</span>
          </h4>



        </div>
      </Link>
    </div>


  )
}

export default PostCard
