import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  const recarregarPagina = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="App">
        <div className="produto-lista">
          {produtos.map((product) => (
            <div className="produto-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description} </p>
              <h4>${product.price} - R$ {(product.price * 4.94).toFixed(2)}</h4>
              <button onClick={recarregarPagina}>Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

