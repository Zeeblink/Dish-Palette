import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navigation from "./Navigation"
import Footer from "./Footer"

const RecipeDetails = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  const navigate = useNavigate()

  const returnBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const API_KEY = '2ecf0a5ce6b7456e97ff317224c58869'
    const API_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setRecipe(data)
        console.log(recipe)
      })
  }, [recipe])

  if (!recipe) {
    return <h1>Retrieving data...</h1>
  }


  let formatedInstructions = recipe.instructions.split("\n")
  return (
    <div>

      <Navigation />

      <div className="container mx-auto md:pr-80">
        <button onClick={returnBack} className="text-xl text-red-600 mb-8"> Go back </button>
        <h1 className="text-3xl mb-8">{recipe.title}</h1>
        <img src={recipe.image} className="mb-12"/>

        {
          formatedInstructions.map((instruction) => (
            <p className="mb-4 md:mb-12 md:text-xl text-start">- {instruction}</p>
          ))
        }
        
      </div>

      <Footer/>
    </div>
  )

}

export default RecipeDetails