import React, { useState } from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from '../Appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])


    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex lg:grid-row-4 md:grid-rows-2 flex-wrap '>
                    {posts.map((post) => (
                        <div key={post.$id} className=' p-3 w-1/4 hover:transform hover:scale-105 transition-transform duration-700 '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
