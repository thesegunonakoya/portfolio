import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../blog/blogPosts";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16">
        <div className="text-left mx-[5vw] md:mx-[20vw] mt-8">
          <Link to="/blog" className="text-[#1DA1F2] hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
          {post.title}
        </h1>
        <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
          Published on: {post.date}
        </p>
        <div className="text-left mx-[5vw] md:ml-[20vw] md:mx-[10vw] mt-8 text-[0.85rem] md:text-[14px] md:leading-8 prose prose-lg prose-invert max-w-[900px] md:max-w-[1000px] text-[#8994AE]">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
