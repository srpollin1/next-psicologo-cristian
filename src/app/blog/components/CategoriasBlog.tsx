import React from 'react'

function CategoriasBlog() {
    return (
        <div className="widget-box">
            <h4 className="widget-title">Categorías</h4>
            <div className="divider"></div>
            <ul className="categories">
                <li><a href="/blog/salud-mental">Salud Mental</a></li>
                <li><a href="/blog/depresion">Entendiendo la Depresión</a></li>
                <li><a href="/blog/relaciones-interpersonales">Relaciones Interpersonales</a></li>
            </ul>
        </div>
    )
}

export default CategoriasBlog
