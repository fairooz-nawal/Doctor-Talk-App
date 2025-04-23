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
        <div className="max-w-full lg:max-w-7xl mx-auto px-5 lg:px-[100px] py-[80px]">
          {
            data.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
          }
        </div>
    );
};

export default BlogsContainer;