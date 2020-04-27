/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returs the sum of the numbers bigger than 5.
*/

function checkArray(array){
    let input=array;
    let sum=0;

    console.log(input);

    for( let i=0; i<input.length;i++){
        if(input[i]>5){
            console.log("Element in array which is bigger than 5 : ",input[i]);
            sum += input[i];
        }
    }
    console.log("The sum of elements bigger than 5 is : ",sum);
}

checkArray(giveMeRandom(5));

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart=[{price: 23, name: "iPhone Cover",id: 0001, nr: 1 },
{price: 670, name: "iPhone X 64gb", id: 21341, nr: 1},
{price: 35, name: "PowerBank", id: 2314, nr: 1}
];

function shippingCartTotal(input){
    let total=0;
    for(let i=0; i<input.length;i++){
            total+= input[i].price;
    }
    console.log("Total price is : ",total);
}

shippingCartTotal(shoppingCart);

/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
*/

const shoppingCart1=[{price: 23, name: "iPhone Cover",id: 0001, nr: 1 },
{price: 670, name: "iPhone X 64gb", id: 21341, nr: 1},
{price: 35, name: "PowerBank", id: 2314, nr: 1}
];

function addToShoppingCart(obj){
    let items=0;
    shoppingCart1.push(obj);
    for(let i=0; i<shoppingCart1.length; i++){
        items +=1;
    }
    console.log("There are ",items," products in the cart!");

}

const newObj={price: 22, name: "random", id: 21421, nr:1};

addToShoppingCart(newObj);

/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

function maxShoppingCart(obj){
    let max= -999;
    for(let i=0; i<obj.length;i++){
        if(obj[i].price> max){
            max=obj[i].price;
        }
    }
    console.log("The most expensive item in cart is : ",max);
}
maxShoppingCart(shoppingCart1);

/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(obj){
    for(let i=0; i<obj.length; i++){
        if(i === obj.length-1){
            console.log(obj[i]);
        }
    }
}

latestShoppingCart(shoppingCart1);

/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
*/

function loopUntil(X){
    for(let i=0; i<X; i++){
        console.log(Math.floor(Math.random() * (X+1)))
    }
}
/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/


/* ****** EXTRA EXERCISES ****** */

/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function that receives a date D as parameter and calculates the number of days passes since the D.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */