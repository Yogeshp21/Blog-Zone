import React from 'react'
import appwriteService from '../Appwrite/config'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'


function PostCard({ $id, title, featuredImage, content }) {
  const truncatedContent = truncateText(content,35);
  function truncateText(text, limit) {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }
  return (
    <div>
      <Link to={`/post/${$id}`} className="group w-full">
        <div>
          <img
            className="mb-5 block w-full rounded-lg"
            src={appwriteService.getFilePreview(featuredImage)} alt={title}
          />
        </div>
        <div>
          <h4 className="mb-5 text-center text-2xl font-bold font-sans text-gray-900">
            {title}
            <br />
            <div className="mt-2 text-center  text-lg text-gray-500 browser-css">{parse(truncatedContent)}</div>
          </h4>



        </div>
      </Link>
    </div>


  )
}

export default PostCard
