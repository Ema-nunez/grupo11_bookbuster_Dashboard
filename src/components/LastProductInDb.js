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
  const [moreDetail, setDetail] = useState(false);

  const abrir = () => {
    setDetail(true);
  };
  const cerrar = () => {
    setDetail(false);
  };
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

          {moreDetail ? (
            <div>
              <table style={{ width: 110 + "%" }}>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Estado: {product.state}</strong>
                    </td>
                    <td>
                      <strong>Stock: {product.stock_max}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Editorial: {product.editorial}</strong>
                    </td>
                    <td>
                      <strong>Tamaño: {product.size}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Categoria: {product.categories}</strong>
                    </td>

                    <td>
                      <strong>Precio: {product.price}</strong>
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
              <br></br>
              <br></br>
              <nav
                onClick={cerrar}
                className="btn btn-danger cerrarInfo"
                rel="nofollow"
              >
                Cerrar
              </nav>
            </div>
          ) : (
            <nav onClick={abrir} className="btn btn-danger" rel="nofollow">
              Mas información
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
