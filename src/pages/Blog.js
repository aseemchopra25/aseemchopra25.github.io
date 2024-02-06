import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Blog = () => {
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch('/markdowns/example-post.md')
      .then((response) => response.text())
      .then((text) => setPost(text));
  }, []);

  return <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />;
};

export default Blog;