import React from "react";
import "./App.css";
import Layout from "./components/Layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import OurStore from "./pages/OurStore.js";
import Blog from "./pages/Blog.js"
import CompareProduct from "./pages/CompareProduct.js";
import Wishlist from "./pages/Wishlist.js";
import Login from "./pages/Login.js";
import Forgotpassword from "./pages/Forgotpassword.js";
import Signup from "./pages/Signup.js";
import Resetpassword from "./pages/Resetpassword.js";
import SingleBlog from "./pages/SingleBlog.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Store" element={<OurStore />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="whishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="reset-password" element={<Resetpassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
