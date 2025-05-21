import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserViewOneBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); 

 
  const blog = location.state?.blog;

  
  React.useEffect(() => {
    if (!blog) {
      alert(
        "Blog data not found."
      );
      navigate("/userviewprofile");
    }
  }, [blog, navigate]);

  if (!blog) return null; 

  // Construct image URL
  const imagePath = blog?.image?.filename
    ? `http://localhost:3002/upload/${blog.image.filename}`
    : blog?.image
    ? `http://localhost:3002/upload/${blog.image}`
    : null;

  
  const handleEdit = () => {
    navigate(`/user-editblog/${blog._id}`, { state: { blog } });

  };

  
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const res = await axios.post(
          "http://localhost:3002/Blog/deleteBlog",
          { id: blog._id }
        );
        if (res.status === 200) {
          alert("Blog deleted successfully!");
          navigate("/userviewprofile", {
            state: { userId: blog.UserId?._id || localStorage.getItem("userId") },
          });
        } else {
          alert("Failed to delete blog. Server responded with status: " + res.status);
        }
      } catch (error) {
        console.error("Delete error:", error);
        alert("An error occurred while deleting the blog.");
      }
    }
  };

  return (
    <div className="container py-5 mt-5 p-5">
      
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() =>
            navigate("/userviewprofile", {
              state: { userId: localStorage.getItem("userId") },
            })
          }
        >
          📄 View Your Blogs
        </button>
      </div>

      <div className="card shadow-sm">
        {imagePath && (
          <img
            src={imagePath}
            alt={blog.Title}
            className="card-img-top"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          <h2 className="card-title">{blog.Title}</h2>
          <h5 className="card-subtitle mb-3 text-muted">{blog.SubTitle}</h5>
          <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>{blog.Discription}</p>
        </div>
        <div className="card-footer text-muted">
          <div className="d-flex justify-content-between align-items-center">
            <span>✍️ By: {blog.UserId?.Name || "Unknown"}</span>
            {localStorage.getItem("userId") === blog.UserId?._id && (
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary" onClick={handleEdit}>
                  ✏️ Edit
                </button>
                <button className="btn btn-outline-danger" onClick={handleDelete}>
                  🗑️ Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewOneBlog;
