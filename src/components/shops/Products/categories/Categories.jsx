import React from "react"
import "./categories.css"
import { NavLink } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Todos los Productos",
      url: "/productos",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Relojes de Pared",
      url: "/productos-relojesPared",
    },
    {
      cateImg: "./images/category/cat12.png",
      cateName: "Paraguas",
      url: "/productos-paraguas",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Lapiceras",
      url: "/productos-lapiceras",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Otros",
      url: "/productos-otros",
    },
  ]

  const categoria = data.map(({cateImg,cateName,url}, index) => {
    return (
      <li key={index} className='categoryes'>
        <NavLink exact to={url} href={url}>
          <div className='box'>
            <img src={cateImg} alt={cateName} />
            <a href="/">{cateName}</a>
          </div>
        </NavLink>
      </li>
    )
  })

  return (
    <div className='category'>
      <ul>{categoria}</ul> 
    </div>
  )
}

export default Categories
