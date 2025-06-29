import "../components/Sidebar.scss"
import React, { useState } from "react";

function Sidebar() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
    return(
<div className="sidebar">
  <div className="filter-section">
    <h4>Color</h4>
    <div className="colors">
      {["Yellow", "Black", "White Coral"].map(color => (
        <button
          key={color}
          className={selectedColors.includes(color) ? "active" : ""}
          onClick={() => toggleColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  </div>

  <div className="filter-section">
    <h4>Sort by Price</h4>
    <label>
      <input
        type="radio"
        name="sort"
        value="asc"
        checked={sortOrder === "asc"}
        onChange={() => setSortOrder("asc")}
      />
      Low to High
    </label>
    <label>
      <input
        type="radio"
        name="sort"
        value="desc"
        checked={sortOrder === "desc"}
        onChange={() => setSortOrder("desc")}
      />
      High to Low
    </label>
  </div>
</div>

    )
}
export default Sidebar;