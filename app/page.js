'use client'
import React from 'react'

import { useRouter } from "next/navigation";
const Home = () => {
    const router = useRouter();
    return (
        <div id='home-page'>

            <h1>Home page</h1>
            <h2>Hi, Myself Developer </h2>
            <h2>and I work at <a href="https://www.newtonschool.co/">Newton School</a></h2>
           <button id="home-to-blog" href="/blog" onClick={()=>{
                router.push("/blog")
            }}> Go to Blog</button>
            <button id="home-to-info" onClick={()=>{
                router.push("/info")
            }}> Go to Info</button>

        </div>
    )
}
export default Home