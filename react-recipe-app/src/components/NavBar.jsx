import React, { useState } from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = ({ searchText, handelSearchText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    navigate('/'); // Navigate to home
    window.location.reload(); // Reload the home page
  };

  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <Link className="navbar-brand" to="/" onClick={handleClick}>
          <h4 style={{ fontWeight: "bold" }}>
            <span style={{ color: "black" }}>KANGA</span>
            <span style={{ color: "orange" }}>COOK</span>
          </h4>
        </Link>
        <div className="d-flex">
          <div
            className="input-group input-group-sm"
            style={{
              width: "500px",
              height: "40px",
              border: "2px solid orange",
              borderRadius: "8px",
            }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => handelSearchText(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              style={{ backgroundColor: "orange", color: "black", border: "0px" }}
              type="submit"
            >
              Search
            </button>
          </div>
        </div>

        <Link to="/add-recipe" style={{ textDecoration: "none" }}>
          <button
            style={{
              color: isHovered ? "black" : "orange",
              backgroundColor : isHovered ? "orange" : "white",
              border: `2px solid ${isHovered ? "black" : "orange"}`,
            }}
            className="btn btn-outline-primary btn-md"
            type="button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaSquarePlus /> Add Recipes
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
