import React from 'react'
import { Link } from 'react-router-dom'
import  Image_1  from '../Images/Image_1.jpg'

 
function InfoPage() {
    return (
        <div className="w-full">

         
            <div className="relative w-full bg-white">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className=" flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        
                        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                            How to Login
                        </h1>
                        <button className="font-bold  rounded-lg py-5 px-3 bg-yellow-500  mt-8 text-lg hover:transform hover:scale-110 transition-transform duration-700">
                            <Link to='/login'>
                                Go to login
                            </Link>
                        </button>
                        <p className="mt-8 font-bold text-lg text-gray-700">

                            Email : test@gmail.com
                            <br />
                            <br />
                            Password : Test@123
                        </p>

                    </div>
                    <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                        <img
                            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                            src={Image_1}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
            


        </div>


    )
}

export default InfoPage
