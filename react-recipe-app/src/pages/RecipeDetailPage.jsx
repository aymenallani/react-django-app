import React, { useEffect, useState } from 'react'
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import "./RecipeDetailPage.css"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FormatDate } from '../components/FormatDate';
import Model from '../components/Model';


const RecipeDetailPage = ({deleteRecipe}) => {
    const [recipe, setRecipe] = useState({})
    const {slug} = useParams()
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    
    useEffect(()=> {
        axios.get(`http://127.0.0.1:8000/recipes/${slug}`)
        .then(res => {
            setRecipe(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [slug])
  return (
    <>
    <div className="note-container">
    <h3 className="title">{recipe.title}</h3>
    <span className="d-flex justify-content-center">
    <p className="note-date font-12 text-muted me-5"> {FormatDate(recipe.created)}</p>
    </span>
    {recipe.image && (
                    <div className="image-container">
                        <img 
                            src={`http://127.0.0.1:8000${recipe.image}`} 
                            alt={recipe.title} 
                            className="recipe-image" 
                        />
                    </div>
                )}
    <span className="button-group">
        <Link to={`/edit-recipe/${slug}`}>
            <button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
        </Link>
      <button className="btn btn-danger"
      onClick={handleIsOpen}
      ><BiSolidTrashAlt /><span>Delete</span></button>
    </span>
    <p className="description">
    {recipe.body}
    </p>



    

  </div>
  {isOpen &&<Model handleIsOpen={handleIsOpen} deleteRecipe={() => deleteRecipe(slug)}/>}
  </>
  )
}

export default RecipeDetailPage