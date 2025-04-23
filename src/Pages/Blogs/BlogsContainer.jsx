import React from 'react';
import { useLoaderData } from 'react-router';
import Blogs from './Blogs'
const BlogsContainer = () => {
    const data = useLoaderData();
    return (
        <div className="max-w-full lg:max-w-7xl mx-auto px-5 lg:px-[100px] pb-[80px]">
          {
            data.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
          }
        </div>
    );
};

export default BlogsContainer;