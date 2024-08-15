import React from "react"
import "./Wrapper.css"

export default function Wrapper() {
  return (
    <section className="wrapper background">
      <div className="heading-middle">
        <h2>Nuestros Clientes</h2>
      </div>
      <div className="container">
        <img src="./images/clientes.jpg" alt="Clientes" />
      </div>
    </section>
  );
}
