

import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero"
import RecipesList from "./Components/RecipesList";
import Footer from "./Components/Footer"
import { useState } from "react";


function App() {   
  const [searchInput, setSerchInput] = useState('')
  const [results, setResults] = useState('')

  const handleSubmit = async (event) => {

    event.preventDefault();
    const API_KEY = '013562ac369b4664b552f29d4aa440ed'
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchInput}`;

    const getRecipes = await fetch(API_URL)
    .then(res => res.json())
    .then(data => setResults(data.results))

    return getRecipes
    
  }



  return (
    <div className="bg-gray-100">
      
      <Navigation/>

      {/* <!-- Main section --> */}
        <main className="py-10">

          <Hero onSubmit={handleSubmit} searchValue={searchInput} onChange={
            (event) => setSerchInput(event.target.value)
          }/>

          <RecipesList recipes={results} />
        </main>

      {/* <!-- Footer section --> */}
      <Footer/>
    </div>
  );
}

export default App;
