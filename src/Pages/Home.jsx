import React, { useEffect, useState } from 'react'
import appwriteService from "../Appwrite/config"
import { Container, PostCard } from '../Components'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { useSelector } from 'react-redux';

function Home() {

    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)


    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })

    }, [])


    if (posts.length > 0 && authStatus) {
        return (
            <div className="relative overflow-hidden py-10 ">
                <Container>
                <div className="relative ">
                    <div className="m-auto  lg:ml-10 lg:mr-20 max-w-xl lg:max-w-full">

                        <div className="my-18 -mx-4  flex flex-wrap px-4 ">
                            <div className=" w-full lg:justify-start lg:px-16 lg:mb-0 lg:w-3/4">
                                <div className=' my-4  md:ml-6 md:mt-0 hover:transform hover:scale-105 transition-transform duration-700 '>
                                    {posts.map((post, index) => (


                                        <div key={post.$id}>
                                            {index === 0 && <PostCard {...post} />}
                                        </div>
                                    ))}
                                </div>


                            </div>
                            <div className="w-full sm:flex-row  lg:w-1/4">
                             
                                <div className="group mb-2 ">
                                    <div
                                        className=" w-75 rounded-lg hover:transform hover:scale-105 transition-transform duration-700 ">
                                        <div>
                                            {posts.map((post, index) => (


                                                <div key={post.$id}>
                                                    {index === 1 && <PostCard {...post} />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                <div className="group  mb-2 ">
                                    <div
                                        className="lg:ml-auto w-75 rounded-lg hover:transform hover:scale-105 transition-transform duration-700 ">
                                        {posts.map((post, index) => (


                                            <div key={post.$id}>
                                                {index === 2 && <PostCard {...post} />}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className="group mb-2 ">
                                    <div
                                        className="lg:ml-auto w-75 rounded-lg hover:transform hover:scale-110 transition-transform duration-700 ">
                                        {posts.map((post, index) => (


                                            <div key={post.$id}>
                                                {index === 3 && <PostCard {...post} />}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                               
                            </div>
                        </div>
                        <div className="mt-14  text-center ">
                            <Link to='/all-posts'>
                            <button
                                type="button"
                                className="rounded-md border mr-4 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:transform hover:scale-110 transition-transform duration-700"
                            >
                                View All Posts
                            </button>
                            </Link>
                            <Link to='/add-post'>
                            <button
                                type="button"
                                className="rounded-md border ml-4 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:transform hover:scale-110 transition-transform duration-700"
                            >
                                Add New Posts
                            </button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                </Container>
            </div>



        )
    }

    return (
        <div>
            <Container>
                <div className=" text-center lg:p-60 p-40 ">

                    <Link to='/login'>
                        <TypeAnimation
                            sequence={[
                                'Login to create Posts....✍️'
                                ,
                                1000,
                                'Login to read Posts....📖',
                                1000,

                            ]}
                            wrapper="span"
                            speed={25}
                            className='text-2xl font-bold '
                            repeat={Infinity}
                        />

                    </Link>


                </div>
            </Container>
        </div>


    )
}

export default Home
