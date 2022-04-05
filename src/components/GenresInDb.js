import React from "react";
import { useState, useEffect } from "react";

function GenresInDb() {
  const [category, setCategories] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.meta.countByCategory);
      });
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        {category.map((e) => {
          return (
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{e.name}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GenresInDb;
