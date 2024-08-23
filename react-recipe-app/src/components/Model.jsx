import React from 'react'
import "./Model.css"
import { useNavigate } from 'react-router-dom'

const Model = ({handleIsOpen, deleteRecipe, reloadRecipes}) => {

    const navigate = useNavigate()

    const handleDeleteRecipe = () => {
        deleteRecipe();
        navigate("/")
        window.location.reload();
    }

  return (
    <div className="c-modal-overlay">
      <div className="c-modal">
        <button className="close-button" onClick={handleIsOpen}>×</button>
        <div className="c-modal-content">
          <h2>Delete Recipe</h2>
          <p>Are you sure want to Delete this recipe?</p>
          <span className="d-flex justify-content-center">
            <button className="btn btn-danger me-3" onClick={handleDeleteRecipe}>Delete</button>
            <button className="btn btn-primary" onClick={handleIsOpen}>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Model