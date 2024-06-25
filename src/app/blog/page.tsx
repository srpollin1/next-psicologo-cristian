import React from "react";
import Navbar from "../assets/Navbar";
import Footer from "../assets/Footer";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <form action="#" className="form-search-blog">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select id="categories" className="custom-select bg-light">
                      <option>Categorías</option>
                      <option value="salud-mental">Salud Mental</option>
                      <option value="ansiedad">Ansiedad</option>
                      <option value="depresion">Depresión</option>
                      <option value="autoestima">Autestima</option>
                      <option value="crisis-de-panico">Crisis de pánico</option>
                    </select>
                  </div>
                  <input type="text" className="form-control" placeholder="Ingresa una palabra.." />
                </div>
              </form>
            </div>
            <div className="col-sm-2 text-sm-right">
              <button className="btn btn-secondary">Filtro <span className="mai-filter"></span></button>
            </div>
          </div>

          <div className="row my-5">
            {posts.map((post, index) => (
              <div className="col-lg-4 py-3" key={index}>
                <div className="card-blog">
                  <div className="header">
                    <div className="post-thumb">
                      <img src={post.image} alt="" />
                    </div>
                  </div>
                  <div className="body">
                    <h5 className="post-title"><a href="http://localhost:3000/blog/saludMental">{post.title}</a></h5>
                    <div className="post-date">Posted on <a href="http://localhost:3000/blog/saludMental">{post.date}</a></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav aria-label="Page Navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-disabled="true">Antes</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
              </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Siguiente</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
}

const posts = [
  {
    image: "https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg",
    title: "Salud Mental",
    date: "27 Jan 2020",
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/04/07/04/17/desperate-5011953_1280.jpg",
    title: "Depresión",
    date: "27 Jan 2020"
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg",
    title: "Relaciones Personales",
    date: "27 Jan 2020"
  },
  {
    image: "../assets/img/blog/blog-4.jpg",
    title: "Source of Content Inspiration",
    date: "27 Jan 2020"
  },
  {
    image: "../assets/img/blog/blog-5.jpg",
    title: "Source of Content Inspiration",
    date: "27 Jan 2020"
  },
  {
    image: "../assets/img/blog/blog-6.jpg",
    title: "Source of Content Inspiration",
    date: "27 Jan 2020"
  },
  {
    image: "../assets/img/blog/blog-1.jpg",
    title: "Source of Content Inspiration",
    date: "27 Jan 2020"
  },
  {
    image: "../assets/img/blog/blog-2.jpg",
    title: "Source of Content Inspiration",
    date: "27 Jan 2020"
  },
  {
    image: "../assets/img/blog/blog-3.jpg",
    title: "Source of Content Inspiration",
    date: "27 Jan 2020"
  }
];
