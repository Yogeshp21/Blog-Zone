<<<<<<< HEAD
import React, { useCallback, useState } from 'react'
=======
import React, { useCallback,useState } from 'react'
>>>>>>> 00a2175847cb862284f7c5c97ddc25592b653854
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE, Loading } from '../index'
import appwriteService from '../../Appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || "active",
            featuredImage: post?.featuredImage || "",

        },
    })


    const blogCategory = ['Technology', 'Engineering', 'Social Media and Marketing', 'Health and Wellness', 'Lifestyle', 'Food and Cooking', 'Finance', 'Geming', 'Entertainment', 'Science and Nature', 'Other']
    const navigate = useNavigate();
<<<<<<< HEAD
    const [loading, setLoading] = useState(false)
=======
const [loading,setLoading] = useState(false)
>>>>>>> 00a2175847cb862284f7c5c97ddc25592b653854

    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
<<<<<<< HEAD
        setLoading(true)
=======
setLoading(true)
>>>>>>> 00a2175847cb862284f7c5c97ddc25592b653854
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
            else {
                appwriteService.deleteFile(data.image[0])
            }
            setLoading(false)
        }
<<<<<<< HEAD

=======
setLoading(false)
>>>>>>> 00a2175847cb862284f7c5c97ddc25592b653854
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-")
                .replace(/^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, '')
                .replace(/^[^a-z\d]*|[^a-z\d]*$/gi, '')
        return "";
    }, []);


    // Edite Post
    React.useEffect(() => {
        if (post && post.title) {
            // Set the default value for the title field
            setValue('title', post.title);
        }
        if (post && post.content) {
            // Set the default value for the title field
            setValue('content', post.content);
        }



    }, [post]);
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return post ? (

        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"

                    placeholder="Title"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed "
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed "
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />

                <Select
                    options={blogCategory}
                    label="Blog Category"
                    className="mb-4"
                    {...register("Blog Category", { required: true })}
                />
<<<<<<< HEAD
                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline "
                >
                    {loading ? (

                        <div>Updating.... </div>



                    ) : 'Update'}
=======
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
{loading ? ("Posting Blog please wait...") : ( {post ? "Update" : "Submit"})}
                   
>>>>>>> 00a2175847cb862284f7c5c97ddc25592b653854
                </Button>
                {loading && <Loading type="bubbles" color='gray' height='50%' width='20%' />}
                {post && (
                    <div className="w-full mt-8 text-center">
                        <h1 className='font-bold'>Blog Preview</h1>
                        <div>
                            <h4 className='font-semibold' >{post.title}</h4>
                            <p className='lg:text-justify lg:overflow-hidden'>{parse(post.content)}
                            </p>
                        </div>

                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                        />
                    </div>
                )}
            </div>
        </form>
    ) :
        (

            <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
                <div className="w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed "
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                </div>
                <div className="w-1/3 px-2">
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed "
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />

                    <Select
                        options={blogCategory}
                        label="Blog Category"
                        className="mb-4"
                        {...register("Blog Category", { required: true })}
                    />
                    <Button
                        type="submit"
                        bgColor={post ? "bg-green-500" : undefined}
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline "
                    >
                        {loading ? (

                            <div>Submiting.... </div>

                        ) : 'Submit'}
                    </Button>
                    {loading && <Loading type="bubbles" color='gray' height='50%' width='20%' />}

                    

                </div>
            </form>
        )
}

