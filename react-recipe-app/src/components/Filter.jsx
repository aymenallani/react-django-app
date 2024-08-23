import React from 'react'

const Filter = ({handleFilterText}) => {
  return (
    <div className="container" style={{width: "500px", margin: "20px auto"}}>
        <select 
          className="form-select" 
          aria-label="Default select example" 
          style={{height: "50px"}}
          onChange={(e) => handleFilterText(e.target.value)}
        >
          <option value={""}>All Recipes</option>
          <option value="BREAKFAST">Breakfast</option>
          <option value="LUNCH">Lunch</option>
          <option value="DINNER">Dinner</option>
          <option value="SNACKS">Snacks</option>
          <option value="DESSERTS">Desserts</option>
          <option value="BEVERAGES">Beverages</option>

        </select>
      </div>
  )
}

export default Filter