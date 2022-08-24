//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

//Example function
function findMexicanFood(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results = dishes.filter(dish => dish.cuisine === "Vegetarian")

    return results;
}

let vegetarianDishes = problemOne();
console.log('Vegitarian Dishes:', vegetarianDishes)

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter


function problemTwo(){

    let results = dishes.filter(dish => dish.cuisine === "Italian" && dish.servings > 5)

    return results;
}

let italianMoreThanFive = problemTwo();
console.log('ItalianMorThanFive Dishes:', italianMoreThanFive)

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter


function problemThree(){

    let results = dishes.filter(dish => dish.id === dish.servings)

    return results;
}

let dishIdMatchesServingCount = problemThree();
console.log('dishIdMatchesServingCount Dishes:', dishIdMatchesServingCount)

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFour(){

    let results = dishes.filter(dish => dish.servings %2 === 0)

    return results;
}

let evenServingCount = problemFour();
console.log('evenServingCount Dishes:', evenServingCount)

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function problemFive(){

    let results = dishes.filter(dish => dish.ingredients[0]==="tomato" && dish.ingredients[1] === "cheese")

    return results;
}

let tomatoCheese = problemFive();
console.log('tomatoCheese Dishes:', tomatoCheese)

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

// function problemSix(){
//     newArray = []

//     let results = dishes.map(dish => dish.cuisine)
     
//     let uniqueArr = [...new Set(results)]

//     return uniqueArr;
// }

function problemSix(){

    let result = dishes.map((dish)=> dish.cuisine).filter((item, i, arr)=> arr.indexOf(item) === i)

    return result
}


let cuisines = problemSix();
console.log('cuisine Dishes:', cuisines)


//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 

// function problemSeven(){

//     result = dishes.map(dish => dish.name = `${dish.cuisine} ${dish.name}`)
     
//     return result
// }

// let appendedNames = problemSeven();
// console.log('appendedName Dishes:', appendedNames)

// console.log(dishes)

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function problemEight(){

    let result = dishes.filter(dish => dish.cuisine === "Vegetarian").map(dish => dish.name = `${dish.cuisine} ${dish.name}`)
     
    return result
}



let appendedNamesTwoVegetarian = problemEight();
console.log('appendedName2 Dishes:', appendedNamesTwoVegetarian)

//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemNine(){

    let result = dishes.filter(dish => dish.ingredients.includes("chickpea"))
     
    return result
}

let chickpeaIngredients = problemNine();
console.log('chickpeaIngredients Dishes:', chickpeaIngredients)


//10. Create a function that will return the total serving count of all dishes.
// Must use Reduce, not a loop.

function problemTen(){

    let result = dishes.map((dish)=> dish.servings).reduce((total, curr) => curr + total)
     
    return result
}

let servingCount = problemTen();
console.log('servingCount Dishes:', servingCount)


//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.


function problemEleven(){

    let freq = {}
    
    cuisines = dishes.map((dish)=>dish.cuisine)
    
    for(cuisine of cuisines){
        if(freq[cuisine]){
            freq[cuisine] += 1
        }else freq[cuisine] = 1
    }

    let result = dishes.filter((dish)=> freq[dish.cuisine] === 1)
     
    return result
}

let uniqueCuisineTypes = problemEleven();
console.log('uniqueCuisineTypes Dishes:', uniqueCuisineTypes)