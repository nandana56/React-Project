import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminViewOneBlog = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const blog = location.state?.blog;

  if (!blog) {
   
    navigate("/admin-viewallblogs");
    return null;
  }

  const imagePath = blog?.image?.filename
    ? `http://localhost:3002/upload/${blog.image.filename}`
    : `http://localhost:3002/upload/${blog.image}`;

  

  return (
    <div className="container py-5 mt-5 p-5">
      <div className="card shadow-sm">
        {blog.image && (
          <img
            src={imagePath}
            alt={blog.Title}
            className="card-img-top"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h2 className="card-title">{blog.Title}</h2>
          <h5 className="card-subtitle mb-3 text-muted">{blog.SubTitle}</h5>
          <p className="card-text">{blog.Discription}</p>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between">
          <span>✍️ By: {blog.UserId?.Name || 'Unknown'}</span>
          
        </div>
      </div>
    </div>
  );
};

export default AdminViewOneBlog;
