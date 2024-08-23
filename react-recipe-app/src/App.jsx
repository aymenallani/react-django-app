import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBAr'
import Filter from './components/Filter'
import RecipeCardContainer from './components/RecipeCardContainer'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout";
import AddRecipePage from './pages/AddRecipePage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import EditRecipePage from './pages/EditRecipePage'
import axios from 'axios'
import { toast } from 'react-toastify';




const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");

  const handleFilterText = (val) => {
    setFilterText(val)
  };

  const handelSearchText = (val) => {
    setSearchText(val)
  }

  const filteredRecipes = filterText === "BREAKFAST" ? recipes.filter(recipe => recipe.category === "BREAKFAST") :
                       filterText === "LUNCH" ? recipes.filter(recipe => recipe.category === "LUNCH") :
                       filterText === "DINNER" ? recipes.filter(recipe => recipe.category === "DINNER") :
                       filterText === "SNACKS" ? recipes.filter(recipe => recipe.category === "SNACKS") :
                       filterText === "DESSERTS" ? recipes.filter(recipe => recipe.category === "DESSERTS") :
                       filterText === "BEVERAGES" ? recipes.filter(recipe => recipe.category === "BEVERAGES") :
                       recipes; 

  useEffect(() => {
    if(!searchText) return;
    axios.get(`http://127.0.0.1:8000/recipes-search/?search=${searchText}`)
    .then(res => {
      console.log(res.data)
      setRecipes(res.data)
    })
    .catch(err => console.log(err.message))
  }, [searchText])

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://127.0.0.1:8000/recipes/")
    .then(res => {
      console.log(res.data)
      setRecipes(res.data)
      setTimeout(() => {
        setIsLoading(false); 
      }, 1500);
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  const addRecipe = (data) => {
    axios.post("http://127.0.0.1:8000/recipes/", data)
    .then(res => {
      setRecipes([...recipes, data])
      toast.success("A new recipe has been added")
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })

  }

  const updateRecipe = (data, slug) => {
    axios.put(`http://127.0.0.1:8000/recipes/${slug}`, data)
    .then(res => {
      console.log(res.data)
      toast.success("Recipe updated succesfully")
    })
    .catch(err =>{
      console.log(err.message)
    })
  }

  const deleteRecipe = (slug) => {
    axios.delete(`http://127.0.0.1:8000/recipes/${slug}`)
    .catch(err => console.log(err.message))
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout searchText={searchText} handelSearchText={handelSearchText} />}>
      <Route index element={<HomePage recipes={filteredRecipes} loading={isLoading} handleFilterText={handleFilterText}/>} />
      <Route path="/add-recipe" element={<AddRecipePage addRecipe={addRecipe} />} />
      <Route path="/edit-recipe/:slug" element={<EditRecipePage updateRecipe={updateRecipe}/>} />
      <Route path="/recipes/:slug" element={<RecipeDetailPage deleteRecipe={deleteRecipe} />} />
    </Route>
  ))
  return (
  <RouterProvider router={router} />
    
  )
}

export default App