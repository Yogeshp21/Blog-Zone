import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../Appwrite/config'
import { Container, Button } from '../Components'
import parse from 'html-react-parser'

function Post() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
    const isAuth = post && userData ? post.userId === userData.$id : false;


    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/")

            })
        }
        else navigate('/')
    }, [slug, navigate])

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div>
            <div className='text-end md:mt-3 md:mr-3 mt-10 mr-10  '>
                {isAuth && (
                    <div className='right-6 font-bold top-6'>
                        <Link to={`/edit-post/${post.$id}`} >
                            <Button
                                bgColor="bg-green-500"
                                className='mr-3'>
                                Edit
                            </Button>
                        </Link>
                        <Button
                            bgColor="bg-red-500 "
                            onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <h2 className="text-3xl md:mt-4 text-center font-bold text-">
                {post.title}
            </h2>
            <div className="mx-auto lg:mr-auto lg:ml-auto my-12 max-w-7xl md:my-5 lg:my-6 lg:px-2">

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="w-full  lg:mt-0 lg:w-1/2">

                        <img
                            className="h-full w-full lg:mt-14 rounded-md object-cover"
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                        />
                    </div>
                    <div className="w-full lg:pl-12 md:text-justify md:p-3  lg:w-2/3">

                        <div className="mt-4 md:mt-8 lg:text-center">
                            <div className='text-justify text-xl browser-css'>{parse(post.content)}</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        /*  <div className='py-8'>
                <Container>
                    <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                        <img src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded-xl' />
    
                        {isAuth && (
                            <div className='absolute right-6  top-6'>
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-green-500"
                                        className='mr-3'>
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-500"
                                    onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className='w-full mb-6 text-center'>
                        <h1 className='text-2xl font-bold'>
                            {post.title}
                        </h1>
                    </div>
                    <div className='text-center browser-css'>{parse(post.content)}</div>
                </Container>
             </div>*/
    ) : null;
}

export default Post
