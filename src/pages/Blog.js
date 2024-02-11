import React from 'react';
import { Link } from 'react-router-dom';
import posts from './posts.json'; // Assuming you have a JSON file with your posts' metadata

const BlogList = () => {
  return (
    <div className="blog-list">
      <Link to="/"><span className="arrow2">↑</span><em>Index</em></Link>
      <p><br/>Writing</p>
      {posts.map(post => (
        <div key={post.slug} className="post-entry">
          <div className="post-year">{post.date.split('-')[0]}</div>
          <Link to={`/blog/${post.slug}`} className="post-link">
            <div className="post-title">{post.title}</div>
            <div className="post-date">{post.date}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;