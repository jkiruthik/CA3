

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((data) => {
    return data.json();
  })
  .then((randomMealData) => {
    console.log(randomMealData);
    let data = "";
    let data2 = "";

    data += `    <div id="random-meal-card">
  <div>
    <img class="random-meal-image" src="${randomMealData.meals[0].strMealThumb}" alt="Meal Image" />
  </div>
  <div id="random-meal-details">
    <h3>${randomMealData.meals[0].strMeal}</h3>
    <h4>Category: ${randomMealData.meals[0].strCategory}</h4>
    <h4>Area: ${randomMealData.meals[0].strArea}</h4>
    <button id="ingre">Ingredients</button>
  </div>
</div>`;


    data2 += `<div id="modal">
    <div id="modal-close-button">
  <h3 class="biggerText">${randomMealData.meals[0].strMeal}</h3>
  
  </div>
  <h4 class="ingText">Category: ${randomMealData.meals[0].strCategory}</h4>
  <a class="fcc-btn" href="${randomMealData.meals[0].strYoutube}" target="_blank">Recipe Video</a>
  <h3 class="bigText">Ingredients</h3>
  <div class="ingText"><h4><div>${randomMealData.meals[0].strIngredient1}</div><div>${randomMealData.meals[0].strIngredient2}</div><div>${randomMealData.meals[0].strIngredient3}</div><div>${randomMealData.meals[0].strIngredient4}</div><div>${randomMealData.meals[0].strIngredient5}</div><div>${randomMealData.meals[0].strIngredient6}</div><div>${randomMealData.meals[0].strIngredient7}</div><div>${randomMealData.meals[0].strIngredient8}</div><div>${randomMealData.meals[0].strIngredient9}</div><div>${randomMealData.meals[0].strIngredient10}</div><div>${randomMealData.meals[0].strIngredient11}</div><div>${randomMealData.meals[0].strIngredient12}</div><div>${randomMealData.meals[0].strIngredient13}</div><div>${randomMealData.meals[0].strIngredient14}</div><div>${randomMealData.meals[0].strIngredient15}</div></h4></div>
  </div> 
  `;

    document.getElementById("modal-flex").innerHTML = data2;
    document.getElementById("meal-card-flex").innerHTML = data;
    var closeMod = document.getElementById("modal");

    
    closeMod.addEventListener("click", () => {
      closeMod.style.display = "none";
    });
    document.getElementById("ingre").onclick = () => {
      closeMod.style.display = "block";
      closeMod.className = "modal-animation";
    };
  })
  .catch((error) => {
    console.log(error);
  });


var input = document.getElementById("searchbox");
function handleClick() {
  var catValue = input.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catValue}`)
    .then((catData) => {
      return catData.json();
    })
    .then((catMealData) => {
      catData = "";
      if (catMealData.meals) {
      for (i = 0; i < catMealData.meals.length; i++) {

          catData += `   <div class="card" onclick="handleCardClick(${catMealData.meals[i].idMeal})" >
        <img id="catimg"
          src="${catMealData.meals[i].strMealThumb}"
          alt="img"
        />
        <h1 class="title">${catMealData.meals[i].strMeal}</h1>
      </div>`;
        }
      } else {
        catData += `<div id="text-align"><h1 id="inter-font">No dish found in this Cuisine </h1></div>`;
      }

      document.getElementById("cat-search").innerHTML = catData;
    });
}


function handleCardClick(e) {
  fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + e)
    .then((getdata) => {
      return getdata.json();
    })
    .then((mealIddetails) => {
      data2 = "";

      data2 += `<div id="modal-search">
      <div id="modal-search-close-button">
    <h3 class="biggerText">${mealIddetails.meals[0].strMeal}</h3>
    
    </div>
    <h4 class="ingText">Category: ${mealIddetails.meals[0].strCategory}</h4>
    <a class="fcc-btn" href="${mealIddetails.meals[0].strYoutube}" target="_blank">Recipe Video</a>
    <h3 class="bigText">Ingredients</h3>
    <div class="ingText"><h4><div>${mealIddetails.meals[0].strIngredient1}</div><div>${mealIddetails.meals[0].strIngredient2}</div><div>${mealIddetails.meals[0].strIngredient3}</div><div>${mealIddetails.meals[0].strIngredient4}</div><div>${mealIddetails.meals[0].strIngredient5}</div><div>${mealIddetails.meals[0].strIngredient6}</div><div>${mealIddetails.meals[0].strIngredient7}</div><div>${mealIddetails.meals[0].strIngredient8}</div><div>${mealIddetails.meals[0].strIngredient9}</div><div>${mealIddetails.meals[0].strIngredient10}</div><div>${mealIddetails.meals[0].strIngredient11}</div><div>${mealIddetails.meals[0].strIngredient12}</div><div>${mealIddetails.meals[0].strIngredient13}</div><div>${mealIddetails.meals[0].strIngredient14}</div><div>${mealIddetails.meals[0].strIngredient15}</div></h4></div>
    </div> 
    `;
      document.getElementById("okdone").innerHTML = data2;

      document.getElementById("modal-search").addEventListener("click", () => {
        document.getElementById("modal-search").style.display = "none";
      });
      document.getElementById("cat-search").onclick = () => {
        document.getElementById("modal-search").style.display = "block";
        document.getElementById("modal-search").className =
          "modal-open-animation";
      };
    });
}