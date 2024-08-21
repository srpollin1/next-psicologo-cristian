// src/app/blog/page.js

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import Navbar2 from "../assets/Navbar2";
import Footer2 from "../assets/Footer2";

const posts = [
  {
    image: "https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg",
    title: "La Importancia de la Salud Mental",
    date: "01 de Julio, 2024",
    href: "/blog/salud-mental",
    category: "salud-mental"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/11/02/20/24/depression-2912404_1280.jpg",
    title: "Entendiendo la Depresión",
    date: "01 de Julio, 2024",
    href: "/blog/depresion",
    category: "depresion"
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg",
    title: "La Importancia de las Relaciones Interpersonales",
    date: "01 de Julio, 2024",
    href: "/blog/relaciones-interpersonales",
    category: "relaciones-interpersonales"
  },
  {
    image: "https://cdn.pixabay.com/photo/2018/12/08/22/42/mirror-3864155_1280.jpg",
    title: "Comprendiendo la Ansiedad",
    date: "16 de Agosto, 2024",
    href: "/blog/comprendiendo-la-ansiedad",
    category: "ansiedad"
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/08/27/17/23/ai-generated-8217603_1280.jpg",
    title: "Comprendiendo el Estrés",
    date: "16 de Agosto, 2024",
    href: "/blog/comprendiendo-el-estres",
    category: "salud-mental"
  },
  {
    image: "https://cdn.pixabay.com/photo/2018/06/02/18/22/fitness-3448864_1280.jpg",
    title: "Terapia Presencial vs Terapia Online",
    date: "21 de Agosto, 2024",
    href: "/blog/terapia-online-vs-terapia-presencial",
    category: "salud-mental"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/08/21/19/00/woman-2666433_1280.jpg",
    title: "Comprendiendo la Dependencia Emocional",
    date: "21 de Agosto, 2024",
    href: "/blog/comprendiendo-la-dependencia-emocional",
    category: "emociones"
  }
];

function BlogContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || "");
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || "");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    handleFilter();
  }, [category, searchTerm]);

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
      <div className="page-section">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ul className="breadcrumb p-0 mb-0 bg-transparent justify-content-center">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Blog</li>
            </ul>
          </nav>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleFilter(); }}>
                <select id="categories" className="form-select me-2" aria-label="Categorías" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Categorías</option>
                  <option value="salud-mental">Salud Mental</option>
                  <option value="ansiedad">Ansiedad</option>
                  <option value="depresion">Depresión</option>
                  <option value="autoestima">Autoestima</option>
                  <option value="crisis-de-panico">Crisis de pánico</option>
                </select>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Ingresa una palabra..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
          </div>

          <div className="row my-5" id="blogs">
            {filteredPosts.map((post, index) => (
              <div className="col-lg-4 py-3" key={index}>
                <div className="card-blog">
                  <div className="header">
                    <div className="post-thumb">
                      <a href={post.href}>
                        <img src={post.image} alt={post.title} />
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <h5 className="post-title"><a href={post.href}>{post.title}</a></h5>
                    <div className="post-date">Publicado el <a href={post.href}>{post.date}</a></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar2 />
      <BlogContent />
      <Footer2 />
    </Suspense>
  );
}
