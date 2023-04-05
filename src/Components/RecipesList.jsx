import { Link } from 'react-router-dom'

const RecipesList = ( {recipes, onclick} ) => {

  // display Popuplar recipes on default
  if (!recipes){
    return <div><h2>Popular recipes</h2></div>
  }

  // check if the fetched recipes data is an array
  if (!Array.isArray(recipes)) {
    return <div>The Error obtaining results</div>;
  }

  

  return (
    <>
    <h1 className="text-3xl font-bold origin-center text-gray-900 mb-10">Popular Recipes</h1>

    <div className=" mb-8 sm:grid sm:grid-cols-3 gap-3">

      {recipes.map((recipe)=> (
        <div className="px-2 mb-8" key={recipe.id}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={recipe.image} alt="Recipe Image" className="w-full"/>
          <div className="p-4">
            <h2 className="text-xl font-medium text-gray-900 mb-2">{recipe.title}</h2>
            <p className="text-base text-gray-700">
              {recipe.summary}
            </p>
          </div>
          <div className="p-4 bg-gray-100">
            <Link to={`/recipes/${recipe.id}`} className="text-white font-medium px-3 py-2 bg-green-600 hover:bg-gray-300 rounded-lg">View Recipe</Link>
          </div>
        </div>
      </div>
      ))}
      
  </div>
    </>
  );
}

export default RecipesList;






/*
  `
        <div className="px-2 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="${item.image}" alt="Recipe Image" className="w-full">
          <div className="p-4">
            <h2 className="text-xl font-medium text-gray-900 mb-2">${item.title}</h2>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="p-4 bg-gray-100">
            <a href="#" className="text-base font-medium text-gray-700 px-3 py-2 bg-green-600 hover:bg-gray-300 rounded-lg">View Recipe</a>
          </div>
        </div>
      </div>
        `
*/