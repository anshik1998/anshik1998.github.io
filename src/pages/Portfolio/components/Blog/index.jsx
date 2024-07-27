// Blog
import React from 'react';
import './index.css';

const BlogPost = ({ title, content }) => (
    <div className="blog-post">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);

const Blog = () => {
    const posts = [
        { title: 'My Journey in AI', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
        { title: 'Blockchain: The Future of Finance', content: 'Praesent in mauris eu tortor porttitor accumsan...' },
    ];

    return (
        <section className="blog">
            <h2 className="section-heading">Blog</h2>
            <div className="blog-container">
                {posts.map((post, index) => (
                    <BlogPost key={index} title={post.title} content={post.content} />
                ))}
            </div>
        </section>
    );
};

export default Blog;