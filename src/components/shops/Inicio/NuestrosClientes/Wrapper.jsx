import React from "react"
import "./Wrapper.css"

export default function Wrapper() {
  return (
    <section className="wrapper">
      <div className="heading-middle">
        <h2>Nuestros Clientes</h2>
      </div>
      <div className="centrar imagenClientes2">
      <img src="./images/clientes2.png" alt="Clientes2" />
      <img src="./images/clientes3.jpg" alt="Clientes3" />
      </div>
    </section>
  );
}
