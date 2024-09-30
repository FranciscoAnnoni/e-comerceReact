import React from "react"
import "./Wrapper.css"

export default function Wrapper() {
  return (
    <section className="wrapper">
      <div className="heading-middle">
        <h2>Nuestros Clientes</h2>
      </div>
      <div className="centrar">
        <img src="./images/clientes.jpg" alt="Clientes" />
      </div>
    </section>
  );
}
