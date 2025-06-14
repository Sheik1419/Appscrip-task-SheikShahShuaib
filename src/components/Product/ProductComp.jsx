import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Product.css";
import SortDropdown from "../Sidebar/SortDropdown.jsx";

const ProductComp = ({ products, wishedItems, toggleWish }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={`splide__track ${sidebarOpen ? "with-sidebar" : ""}`}>
      <ul className="splide__list" style={{ display: "flex" }}>
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div
          style={{
            marginLeft: sidebarOpen && window.innerWidth > 767 ? "315px" : "0",
            flex: 1,
            padding: "0px",
          }}
        >
          <div className="products-header">
            <div className="products-head-left">
              <h5 className="product-length">{products.length} Items</h5>
              <h5 className="respSidebarBtn" onClick={toggleSidebar}>Filters</h5>
              <h6 className="sidebar-toggle" onClick={toggleSidebar}>
                <i className={`fas ${sidebarOpen ? "fas fa-angle-left" : "fas fa-angle-right"}`}></i>&nbsp;
                {sidebarOpen ? " Hide Filters" : " Show Filters"}
              </h6>
            </div>
            <div className="brdr">
              <hr />
            </div>
            <div className="products-head-right">
              <SortDropdown />
            </div>
          </div>
          <hr />

          <div className="products-grid">
            {products.map((product, index) => (
              <li className="splide__slide" key={index}>
                <div className="product-content">
                  <div className="product-img">
                    <img src={product.image} width="95%" alt="" />
                  </div>
                  <div className="carousel-content">
                    <div className="product-title">
                      <h5>{product.title}</h5>
                      <h6><a href="#">Sign in</a> or Create an account to see pricing</h6>
                    </div>
                    <div className="product-wish">
                      <h6
                        className={`m-0 wish ${wishedItems[product.id] ? "active" : ""}`}
                        onClick={() => toggleWish(product.id)}
                      >
                        <i className={wishedItems[product.id] ? "fas fa-heart" : "fa-regular fa-heart"}></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ProductComp;
