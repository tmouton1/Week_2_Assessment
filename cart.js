///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, item) => {
    return total +item.price

}, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let CartTotal = summedPrice
    let taxValue = CartTotal * (1 * tax)
    let FinalValue = taxValue - couponValue
    return FinalValue
}
console.log(calcFinalPrice(27,.25,.10))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    
Customer Object(name,address,number,payment) {

    Name: {String},
    Address: {String},
    Number: {String},
    Payment: {String}
}
Each of the properties above use string data types because they carry a series of characters.
Each of these properties are neccessary for capturing data for customer payment,
location, contact information.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

customerCart = {
    Name: `Yazi`,
    Address: `111 Blu Lane`,
    Number: `202-777-9311`,
    Payment: `Bisa`

}

