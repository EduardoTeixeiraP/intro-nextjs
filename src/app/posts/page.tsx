'use client'



import Image from "next/image"
import { useState, useEffect } from "react"

interface post {
    id:number,
    title:string,
    body:string
}

export default function PostsPage() {
    const [Posts, setPosts] = useState<post[]>([])

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await res.json()
            setPosts(data)
    }
    fetchPosts();
    }, [])

    return (
        <>
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Últimos posts</h1>
            {/* {Posts.map((Post)=>(
                <h2>{Post.title}</h2>
            ))} */}
            {Posts.map((post)=>(
                <div className="items-center bg-gray-200 p-4 m-4 rounded max-w-200">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                </div>
            ))}
        </div>
        </>
    )
 }