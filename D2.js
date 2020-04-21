/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

const array = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const myObj= {
    name: "Klevin",
    surname: "Bazaiti",
    email: "klevin.bazaiti98@gmail.com",
    age: 21
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

myObj.dL=true;

/* EXERCISE 4
Remove from the previously created object the age
*/

delete myObj.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const newObj = {
    name: "Filan",
    surname: "Fisteku",
    email: "filan.fisteku98@gmail.com"
};

let result = (myObj.email.toLowerCase() === newObj.email.toLowerCase()) ? true : false;

console.log(result);

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalShoppingCart = 150;
let totalCost=totalShoppingCart;

if (totalShoppingCart > 50){
    totalCost += 0;
}else{
    totalCost += 10;
}

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

let dsc=20;

totalCostAfter = totalShoppingCart - (totalShoppingCart * dsc/100);

if (totalShoppingCart > 50){
    totalCost += 0;
}else{
    totalCost += 10;
}


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const car1 = {
    brand: "Benz",
    model: "E320",
    licensePlate: "AA 320 AA"
};
const car2={},car3={},car4={},car5={};
Object.assign(car2, car1);

car2.licensePlate= "AA 111 AA";

Object.assign(car3, car1);

car3.licensePlate= "AA 222 AA";

Object.assign(car4, car1);

car4.licensePlate= "AA 333 AA";

Object.assign(car5, car1);

car5.licensePlate= "AA 444 AA";

// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);
// console.log(car5);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = [{ brand: 'Benz', model: 'E320', licensePlate: 'AA 320 AA' },
{ brand: 'Benz', model: 'E320', licensePlate: 'AA 111 AA' },
{ brand: 'Benz', model: 'E320', licensePlate: 'AA 222 AA' },
{ brand: 'Benz', model: 'E320', licensePlate: 'AA 333 AA' },
{ brand: 'Benz', model: 'E320', licensePlate: 'AA 444 AA' }];

// console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/


carsForRent.shift();
carsForRent.pop();
// console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(carsForRent[0].brand," license plate ",carsForRent[0].licensePlate);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

const carsForSale = [{ brand: 'Golf', model: 'MK5', licensePlate: 'AA 780 AA' },
{ brand: 'Golf', model: 'MK5', licensePlate: 'AA 770 AA' },
{ brand: 'Golf', model: 'MK5', licensePlate: 'AA 777 AA' },];

let totalCars1 = carsForSale.concat(carsForRent);


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

console.log(carsForSale);