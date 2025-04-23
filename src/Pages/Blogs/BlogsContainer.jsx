import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Blogs from './Blogs'
import { ApiProvider } from '../contextAPI/ContextApi';
const BlogsContainer = () => {
    const data = useLoaderData();
    const {loading} = useContext(ApiProvider);
    if (loading) {
      return (
          <div className="max-w-[100px] mx-auto py-[80px]">
              <span className="loading loading-bars loading-xl"></span>
          </div>
      );
  }
    return (
        <div className="max-w-full lg:max-w-7xl mx-auto px-5 lg:px-[100px] py-[50px]">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">Blogs</h1>
          <p className='text-center'>Lets Explore some basic concepts</p><br />
          {
            data.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
          }
        </div>
    );
};

export default BlogsContainer;