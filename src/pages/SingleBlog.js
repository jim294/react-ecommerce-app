import React from "react";
import BreadCrumb from "../components/BreadCrumb.js";
import Meta from "../components/Meta.js";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container.js";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4"/>
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  sapiente sed aut minima, autem, earum quo, facilis optio
                  laboriosam dicta asperiores aspernatur fuga libero
                  exercitationem maiores sequi distinctio rem qui? Officia ipsa
                  animi similique assumenda quo tempore doloribus laborum
                  sapiente repudiandae mollitia minima, reiciendis, ipsum iste
                  illo provident architecto porro libero ratione ducimus
                  asperiores nihil consequatur in vero odit! Nihil nulla tempora
                  voluptatum inventore perspiciatis alias voluptatibus mollitia!
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
