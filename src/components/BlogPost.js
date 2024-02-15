import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const BlogPost = () => {
  const [postContent, setPostContent] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    import(`../../public/markdowns/${slug}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(text => setPostContent(text))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }, [slug]);

  return (
  <>
  <Link to="/blog"><span className="arrow2">↑</span><em>Writing</em></Link>
  <ReactMarkdown children={postContent} remarkPlugins={[remarkGfm]} />
  </>
  )

};

export default BlogPost;
