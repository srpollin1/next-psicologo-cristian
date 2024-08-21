import React from 'react'

function PostRecientes() {
    return (
        <div className="widget-box">
            <h4 className="widget-title">Post Recientes</h4>
            <div className="divider"></div>
            <div className="blog-item">
                <a className="post-thumb" href="/blog/salud-mental">
                    <img src="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg" alt="" />
                </a>
                <div className="content">
                    <h6 className="post-title"><a href="/blog/salud-mental">La Importancia de la Salud Mental</a></h6>
                    <div className="meta">
                        <a><span className="mai-calendar"></span>01 de Julio, 2024</a>
                        {/* <a href="#"><span className="mai-person"></span> Admin</a> */}
                        {/* <a href="#"><span className="mai-chatbubbles"></span> 19</a> */}
                    </div>
                </div>
            </div>
            <div className="blog-item">
                <a className="post-thumb" href="/blog/depresion">
                    <img src="https://cdn.pixabay.com/photo/2017/11/02/20/24/depression-2912404_1280.jpg" alt="" />
                </a>
                <div className="content">
                    <h6 className="post-title"><a href="/blog/depresion">Entendiendo la Depresión</a></h6>
                    <div className="meta">
                        <a ><span className="mai-calendar"></span> 01 de Julio, 2024</a>
                        {/* <a href="#"><span className="mai-person"></span> Admin</a> */}
                        {/* <a href="#"><span className="mai-chatbubbles"></span> 19</a> */}
                    </div>
                </div>
            </div>
            <div className="blog-item">
                <a className="post-thumb" href="/blog/relaciones-interpersonales">
                    <img src="https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg" alt="" />
                </a>
                <div className="content">
                    <h6 className="post-title"><a href="/blog/relaciones-interpersonales">Relaciones Interpersonales</a></h6>
                    <div className="meta">
                        <a ><span className="mai-calendar"></span> 01 de Julio, 2024</a>
                        {/* <a href="#"><span className="mai-person"></span> Admin</a> */}
                        {/* <a href="#"><span className="mai-chatbubbles"></span> 19</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostRecientes
