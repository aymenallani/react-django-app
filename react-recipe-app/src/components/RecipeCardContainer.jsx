import React from 'react'
import RecipeCard from './RecipeCard'
import Loader from './Loader'

const RecipeCardContainer = ({recipes, loading}) => {
  return (
    <div className="container">
    <div className="note-has-grid row">
      {loading && <Loader loading={loading}/>}
      { recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
    </div>
    </div>
  )
}

export default RecipeCardContainer