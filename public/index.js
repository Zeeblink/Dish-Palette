


    
const getRecipes = async (query) => {

    let key = '013562ac369b4664b552f29d4aa440ed'

    // https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${key}

    await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}`)
    .then(res => res.json())
    .then(data => {
      let recipeList = document.getElementById('recipes')
      let itemDiv;
      console.log(data.results[0])

        data.recipes.forEach((item) => {
        itemDiv = document.createElement("div")
        itemDiv.innerHTML = 
        `
        <div class="px-2 mb-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="${item.image}" alt="Recipe Image" class="w-full">
          <div class="p-4">
            <h2 class="text-xl font-medium text-gray-900 mb-2">${item.title}</h2>
            <p class="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="p-4 bg-gray-100">
            <a href="#" class="text-base font-medium text-gray-700 px-3 py-2 bg-green-600 hover:bg-gray-300 rounded-lg">View Recipe</a>
          </div>
        </div>
      </div>
        `

        recipeList.appendChild(itemDiv)
      })
      
      
      // document.querySelector('#img').setAttribute('src', data.results[0].image)
    })


    .catch(error => console.log(error))
  }
getRecipes();





// const get = async () => {
//     await fetch('test.txt')
//     .then(res => res.text()).then(data => console.log(data)).catch(err => console.log(err))
// }
// get()