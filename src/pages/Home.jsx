// Products.jsx
import React, { useState, useEffect } from "react";
import ProductComp from "../components/Product/ProductComp.jsx";

const Products = () => {
  const [wishedItems, setWishedItems] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) throw Error("Can't Fetch Data..!");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log("Error:", err);
        setProducts([]);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const toggleWish = (id) => {
    setWishedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (loading) return <p>Loading Data..!</p>;

  return (
    <div className="products">
      <div className="products-div">
        <div className="products-main">
          <div className="main-header">
            <h2>Discover Our Products</h2>
            <h6>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h6>
          </div>
          <hr />
          <div className="products-card">
            <ProductComp
              products={products}
              wishedItems={wishedItems}
              toggleWish={toggleWish}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
