"use client";

import React, { useState } from "react";
import Navbar2 from "../assets/Navbar2";
import Footer2 from "../assets/Footer2";

export default function Blog() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleFilter = () => {
    let filtered = posts;
    if (category) {
      filtered = filtered.filter((post) => post.category === category);
    }
    if (searchTerm) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Navbar2 />
      <div className="page-section">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ul className="breadcrumb p-0 mb-0 bg-transparent">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Blog</li>
            </ul>
          </nav>
          <br />
          <div className="row">
            <div className="col-sm-10">
              <form action="#" className="form-search-blog" onSubmit={(e) => { e.preventDefault(); handleFilter(); }}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select id="categories" className="custom-select bg-light" value={category} onChange={(e) => setCategory(e.target.value)}>
                      <option value="">Categorías</option>
                      <option value="salud-mental">Salud Mental</option>
                      <option value="ansiedad">Ansiedad</option>
                      <option value="depresion">Depresión</option>
                      <option value="autoestima">Autoestima</option>
                      <option value="crisis-de-panico">Crisis de pánico</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa una palabra.."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="col-sm-2 text-sm-right">
              <button className="btn btn-secondary" onClick={handleFilter}>
                Filtro <span className="mai-filter"></span>
              </button>
            </div>
          </div>

          <div className="row my-5">
            {filteredPosts.map((post, index) => (
              <div className="col-lg-4 py-3" key={index}>
                <div className="card-blog">
                  <div className="header">
                    <div className="post-thumb">
                      <img src={post.image} alt="" />
                    </div>
                  </div>
                  <div className="body">
                    <h5 className="post-title"><a href={post.href}>{post.title}</a></h5>
                    <div className="post-date">Posted on <a href={post.href}>{post.date}</a></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

const posts = [
  {
    image: "https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg",
    title: "Salud Mental",
    date: "27 Jan 2020",
    href: "/blog/salud-mental",
    category: "salud-mental"
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/04/07/04/17/desperate-5011953_1280.jpg",
    title: "Depresión",
    date: "27 Jan 2020",
    href:"/blog/depresion",
    category: "depresion"
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg",
    title: "Relaciones Personales",
    date: "27 Jan 2020",
    href:"/blog/relaciones-personales",
    category: "autoestima"
  },
  {
    image: "../assets/img/blog/blog-4.jpg",
    title: "Source of Content Inspiration",
    date: "27 Jan 2020",
    href:"/blog/source-of-content-inspiration",
    category: "autoestima"
  }
];
