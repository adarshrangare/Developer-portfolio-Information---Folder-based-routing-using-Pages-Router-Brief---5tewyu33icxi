'use client'

import { useRouter } from "next/navigation";
import React from "react";
const Blog = () => {

    const router = useRouter();

    return (
        <div id="blog-page">

            <h1>Blog page</h1>
            <h2>Checkout my awesome blogs </h2>
            <h3><a href='https://www.newtonschool.co/post/top-13-web-developer-interview-questions'>Web Development Interview questions</a></h3>
            <h3><a href='https://www.newtonschool.co/post/graph-data-structure-explained-with-examples'>Graph Data Structures</a></h3>
            <button id="blog-to-info" onClick={()=>{
                router.push("/info")
            }} > Go to Info</button>
            <button id="blog-to-home" onClick={()=>{
                router.push("/")
            }}> Go to Home</button>
        </div>
    )
}
export default Blog