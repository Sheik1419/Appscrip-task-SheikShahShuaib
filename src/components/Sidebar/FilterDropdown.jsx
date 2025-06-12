import React, { useState } from "react";
import "./FilterDropdown.css";

const Dropdown = ({ label = "Select Options", options = [], selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOption = (option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter((item) => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    const selectAll = () => setSelected([...options]);
    const unselectAll = () => setSelected([]);

    return (
        <div className="filter-dropdown">
            <div className="filter-header">
                <div className="filter-heading" onClick={() => setIsOpen(!isOpen)}>
                    <h5>{label}</h5>
                    <i className={`fas ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}></i>
                </div>
                <div>
                    <h6 className={selected.length === options.length ? "active" : ""} onClick={selectAll}>All</h6>
                </div>
            </div>

            {isOpen && (
                <div className="filter-body">
                    <div className="filter-actions">
                        <h6 onClick={unselectAll}>Unselect all</h6>
                    </div>

                    <ul>
                        {options.map((option) => (
                            <li key={option}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(option)}
                                        onChange={() => toggleOption(option)}
                                    />
                                    <span>{option}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
