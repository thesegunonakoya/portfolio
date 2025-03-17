import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blog/blogPosts';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <>
      <Helmet>
        {/* <title>Blog</title>
        <meta name="description" content="Check out my latest blog posts on web development and software engineering." /> */}
      </Helmet>
      <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16">
        <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
          Blog 📝
        </h1>
        <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
          Here are my latest blog posts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-[5vw] md:mx-[20vw]">
          {blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post, index) => (
            <div key={index} className="text-left">
              <h2 className="text-[1.1rem] md:text-lg font-semibold text-[#E2EAFD]">
                <Link to={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
                {post.description}
              </p>
              <p className="mt-2 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.8]">
                Published on: {post.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;