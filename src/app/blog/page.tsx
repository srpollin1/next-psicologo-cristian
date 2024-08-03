"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar2 from "../assets/Navbar2";
import Footer2 from "../assets/Footer2";
import PaginationControls from '../components/PaginationControls';

const posts = [
  {
    image: "https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg",
    title: "La Importancia de la Salud Mental",
    date: " 01 de Julio, 2024",
    href: "/blog/salud-mental",
    category: "salud-mental"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/11/02/20/24/depression-2912404_1280.jpg",
    title: "Entendiendo la Depresión",
    date: " 01 de Julio, 2024",
    href: "/blog/depresion",
    category: "depresion"
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg",
    title: "La Importancia de las Relaciones Interpersonales",
    date: " 01 de Julio, 2024",
    href: "/blog/relaciones-interpersonales",
    category: "relaciones-interpersonales"
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/11/19/21/14/therapy-1050627_1280.jpg",
    title: "Cómo Manejar la Ansiedad",
    date: " 02 de Julio, 2024",
    href: "/blog/ansiedad",
    category: "ansiedad"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/01/18/17/14/heart-1991760_1280.jpg",
    title: "Autoestima y su Impacto",
    date: " 03 de Julio, 2024",
    href: "/blog/autoestima",
    category: "autoestima"
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/09/22/21/44/panic-5590688_1280.jpg",
    title: "Enfrentando una Crisis de Pánico",
    date: " 04 de Julio, 2024",
    href: "/blog/crisis-de-panico",
    category: "crisis-de-panico"
  }
];

export default function Blog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || "");
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || "");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const page = searchParams.get('page') ?? '1';
  const per_page = 3; // Mostrar 3 posts por página

  const start = (Number(page) - 1) * Number(per_page); // 0, 3, 6 ...
  const end = start + Number(per_page); // 3, 6, 9 ...

  useEffect(() => {
    handleFilter();
  }, [category, searchTerm, page, per_page]);

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
    setFilteredPosts(filtered.slice(start, end));
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

          <div className="row my-5" id="blogs">
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
                    <div className="post-date">Publicado el <a href={post.href}>{post.date}</a></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <PaginationControls
            hasNextPage={end < posts.length}
            hasPrevPage={start > 0}
            totalPosts={posts.length}
            currentPage={Number(page)}
            postsPerPage={Number(per_page)}
          />
        </div>
      </div>
      <Footer2 />
    </>
  );
}
