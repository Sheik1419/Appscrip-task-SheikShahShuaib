import React, { useState, useRef, useEffect } from "react";
import "./SortDropdown.css";

const SortDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("RECOMMENDED");
    const dropdownRef = useRef(null);

    const options = [
        "RECOMMENDED",
        "NEWEST FIRST",
        "POPULAR",
        "PRICE : HIGH TO LOW",
        "PRICE : LOW TO HIGH",
    ];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="sort-dropdown" ref={dropdownRef}>
            <div className="sort-selected" onClick={() => setIsOpen(!isOpen)}>
                <span>{selected}</span>
                <i className={`fas fa-angle-${isOpen ? "up" : "down"}`}></i>
            </div>

            {isOpen && (
                <ul className="sort-options">
                    {options.map((option) => (
                        <li
                            key={option}
                            className={option === selected ? "active" : ""}
                            onClick={() => handleSelect(option)}
                        >
                            {option === selected && <span className="checkmark">✔</span>}
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortDropdown;
