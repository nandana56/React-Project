import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/common/Navbar";
import Home from "./components/common/Home";
import Signup from "./components/user/Signup"
import Login from './components/user/Login';
import ForgetPassword from "./components/user/ForgetPassword"
import ResetPassword from "./components/user/ResetPassword"

import ChangePassword from './components/user/ChangePassword';
import ResetSuccess from "./components/user/ResetSuccess"
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

import ViewAllBlogs from './components/blog/ViewAllBlogs';
import UserViewProfile from './components/user/UserViewProfile';
import EditProfile from './components/user/EditProfile';
import ViewAllUsers from './components/admin/ViewAllUsers';
import ViewOneUser from './components/admin/ViewOneUser';
import PendingUsers from './components/admin/PendingUsers';

import AdminLogout from "./components/admin/AdminLogout";
import UserLogout from './components/user/UserLogout';
import UserProfile from './components/user/UserProfile';
import AddBlog from './components/blog/AddBlog';
// import ViewOneBlog from './components/blog/ViewOneBlog';
import UserViewOneBlog from './components/user/UserViewOneBlog';
import AdminViewOneBlog from './components/admin/AdminViewOneBlog';
import EditBlog from './components/blog/EditBlog';

import ViewBlogs from './components/blog/ViewBlogs';



// import DeleteUser from './components/admin/DeleteUser';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />

         <Route path="/user-changepassword" element={<ChangePassword/>} />
        <Route path="/user-resetsuccess" element={<ResetSuccess/>} />
        
       
        
        <Route path="/loginadmin" element={<AdminLogin/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/user-editprofile" element={<EditProfile/>} />
        <Route path="/admin-viewallusers" element={<ViewAllUsers/>} />
        <Route path="/admin-viewoneuser/:id" element={<ViewOneUser/>} />
        <Route path="/admin-viewallblogs" element={<ViewAllBlogs/>} />
        <Route path="/admin-pendingusers" element={<PendingUsers/>} />
        {/* <Route path="/deleteusers" element={<DeleteUser />} /> */}
        <Route path="/admin-logout" element={<AdminLogout />} />

        
        <Route path="/userviewprofile" element={<UserViewProfile/>} />

        <Route path="/userlogout" element={<UserLogout />} />
        <Route path="/user-profile" element={<UserProfile />} />
       <Route path="/user-addblog/:id" element={<AddBlog />} />

        <Route path="/user-viewoneblog/:id" element={<UserViewOneBlog/>} />
        <Route path="/admin-viewoneblog/:id" element={<AdminViewOneBlog/>} />

        <Route path="/user-editblog/:id" element={<EditBlog/>} />
        <Route path="/viewblogs" element={<ViewBlogs/>} />



        


        

        



      </Routes>
    </Router>
  );
}

export default App;
