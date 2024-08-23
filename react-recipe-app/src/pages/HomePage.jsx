import React from 'react'
import Filter from '../components/Filter'
import RecipeCardContainer from '../components/RecipeCardContainer'
const HomePage = ({recipes, loading, handleFilterText}) => {
  return (
    <>
      {recipes.length < 1 ? <h4 style={{textAlign:"center", marginTop:"10px"}}>No recipe found</h4> : <Filter handleFilterText={handleFilterText}/>}
      <RecipeCardContainer  recipes={recipes} loading={loading}/>
    </>
  )
}

export default HomePage