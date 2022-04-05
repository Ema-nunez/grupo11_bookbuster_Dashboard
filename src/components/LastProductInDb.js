import React from "react";
import { useState, useEffect } from "react";

function LastMovieInDb() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        let lastProduct = data.products.pop();
        fetch("api/products/" + lastProduct.id)
          .then((res) => res.json())
          .then((data) => {
            setProduct(data.product);
          });
      });
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo producto agregado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={product.image}
              alt=" Star Wars - Mandalorian "
            />
          </div>
          <p>{product.description}</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
