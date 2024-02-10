import React from 'react';
import { Link } from 'react-router-dom';
import posts from './posts.json'; // Assuming you have a JSON file with your posts' metadata

const Blog = () => {
  return (
    <div>
      <h1>Index</h1>
      <section>
        {posts.map(post => (
          <article key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;