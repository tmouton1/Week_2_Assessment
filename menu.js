///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name: `supreme`,
    price: 14.99,
    category: `dinner`,
    popularity: `10`,
    rating: `8`,
    tags: [`family size`, `share`,`meat`,`spicy`]
}




//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1])
/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/


//CODE HERE

pizza.price = `12.99`
console.log(pizza.price)

let price = newPrice = 12.99;

priceTwo = price
price = priceTwo
priceTwo = newPrice

console.log(newPrice)



/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

let category = newCategory = `lunch`

categoryTwo = category
category = categoryTwo
categoryTwo = newCategory

console.log(newCategory)



//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

let foodArr = [
    {
        name: "chicken",
        price: 30,
        category: "poultry",
        spice: 4,
        tags: ["gluten-free", "tasty", "savory"]
    },
    {
        name: "steak",
        price: 40,
        category: "meat",
        spice: 1,
        tags: ["hearty", "local", "select"]
    },
    {
        name: "scallops",
        price: 35,
        category: "seafood",
        spice: 5,
        tags: ["healthy", "chef special", "classic"]
    },
    {
        name: "salmon",
        price: 32,
        category: "seafood",
        spice: 1,
        tags: ["wild-caught", "sustainable", "healthy"]
    },
    {
        name: "carrot cake",
        price: 10,
        category: "dessert",
        spice: 0,
        tags: ["sweet", "delicious", "chef special"]  
    }
]
  


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter((foodArr) => foodArr.tags ='chef special' )
{

}

console.log(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE


const filterByProperty = foodArr.filter(foodArr) 

    for (foodArr.price)
    {
  if (foodArr.price <= 15)
  return false
        }
    



/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE