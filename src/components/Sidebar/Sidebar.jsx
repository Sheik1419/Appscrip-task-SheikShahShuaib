import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown.jsx";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [idealFor, setIdealFor] = useState([]);
    const [occasion, setOccasion] = useState([]);
    const [brand, setBrand] = useState([]);
    const [size, setSize] = useState([]);
    const [fabric, setFabric] = useState([]);
    const [material, setMaterial] = useState([]);

    return (
        <>
            {isOpen && window.innerWidth <= 767 && (
                <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            )}

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="customize">
                    <div className="customizecheckbox">
                        <input type="checkbox" />
                        <h6>Customizable</h6>
                    </div>
                    <button className="close-btn" onClick={toggleSidebar}>×</button>
                </div>

                <FilterDropdown label="Ideal For" options={["Men", "Women", "Boys", "Girls", "Baby & Kids"]} selected={idealFor} setSelected={setIdealFor} />
                <FilterDropdown label="Occasion" options={["Casuals", "Formals", "Traditional"]} selected={occasion} setSelected={setOccasion} />
                <FilterDropdown label="Work" options={["1", "2", "3"]} selected={brand} setSelected={setBrand} />
                <FilterDropdown label="Brand" options={["Nike", "Adidas", "Puma", "HRX", "Louis Philippe", "Allen Solly"]} selected={brand} setSelected={setBrand} />
                <FilterDropdown label="Size" options={["S", "M", "L", "XL", "XXL", "XXXL"]} selected={size} setSelected={setSize} />
                <FilterDropdown label="Fabrics" options={["Silk", "Velvet", "Chiffon", "Crepe", "Geogrette", "Lace"]} selected={fabric} setSelected={setFabric} />
                <FilterDropdown label="Suitable For" options={["1", "2", "3", "4"]} selected={idealFor} setSelected={setIdealFor} />
                <FilterDropdown label="Material" options={["Cotton", "Silk", "Denim", "Linen", "Wool"]} selected={material} setSelected={setMaterial} />
                <FilterDropdown label="Pattern" options={["Plain", "Checked", "Floral"]} selected={occasion} setSelected={setOccasion} />

            </div>
        </>
    );
};

export default Sidebar;