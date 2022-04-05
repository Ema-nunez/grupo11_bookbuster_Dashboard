import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

function ContentRowMovies() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.meta);
      });
  }, []);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.meta.countByCategory);
      });
  }, []);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data.count);
      });
  }, []);
  let moviesInDB = {
    title: "Productos en base de datos",
    color: "primary",
    cuantity: products.count,
    icon: "fa-clipboard-list",
  };

  /* <!-- Total awards --> */

  let totalAwards = {
    title: "Categorias",
    color: "success",
    cuantity: categories.length,
    icon: "fa-award",
  };

  /* <!-- Actors quantity --> */

  let actorsQuantity = {
    title: "Usuarios Registrados",
    color: "warning",
    cuantity: users,
    icon: "fa-user-check",
  };
  let cartProps = [moviesInDB, totalAwards, actorsQuantity];

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
