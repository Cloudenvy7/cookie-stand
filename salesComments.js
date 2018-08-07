'use strict';
console.log('javascript loaded');
// //1. min and max of hourly customers and the average cookies per customer in object parameters
// var FirstandPike = {
//   minCust: 23;
//   maxCust: 65;
//   avgCkie: 6.3;
//   totalSales: Math.floor(Math.random(max)
// }

//Step 1. create objects that represent each store
//A. rSearch: https://www.dyn-web.com/tutorials/object-literal/

var firstPike = {
  minCust: 23,
  maxCust : 65,
  avgCkie : 6.3,
  avgCustHr: custPerHr,
  cookiesPerHr: cookiesPerHr,
  storeSales:[],
  storeHrs:[]
  //added an empty array that is meant to take in and store 15 numbers representing cookie sales per hour
};
  // firstPike is a object that has properites, these properties have values, this makes them key: values
  //the the last two properties are variables that hold a function - this is important because these values
  //have the the (this.function(0) with in them, which essentailly calls on the object by name -- and then it     can
  //pull in properties from that object. ( this the word is based on context, hence it has to be referring
  //to something. -code academy this is...))
  //added an empty array that is meant to take in and store 15 numbers representing cookie sales per hour
var seaAir = {
  minCust: 3,
  maxCust : 24,
  avgCkie : 1.2,
  avgCustHr: custPerHr,
  cookiesPerHr: cookiesPerHr

};

var seaCenter = {
  minCust: 11,
  maxCust : 38,
  avgCkie : 3.7,
  avgCustHr: custPerHr,
  cookiesPerHr: cookiesPerHr

};

var capHill = {
  minCust: 20,
  maxCust : 38,
  avgCkie : 2.3,
  avgCustHr: custPerHr,
  cookiesPerHr: cookiesPerHr
};


var alki = {
  minCust: 2,
  maxCust : 65,
  avgCkie : 4.6,
  avgCustHr: custPerHr,
  cookiesPerHr: cookiesPerHr
};

//Step 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// 2(a). random functions :https://www.w3schools.com/js/js_random.asp
// 2(b) .in this code need a range starting from minCust and ending with maxCust
//Answer. Getting a random number between two values https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function custPerHr() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  //Math.floor - takes the number and rounds it
//Math.random - caculates a number based on a multiple?
//max - min - is subtracting the min amount from the max to find the range 33-23 = a range of 10 numbers
//between the numbers provide for by min and max....
//+ min - add the min to the range happens after the * (beacuse of order of operations) and that brings the
//min range is applied to the single answer

//does (minCust,maxCust) need to be an array? how else will a range be sett? answer 3(a)--->

  //*(minCust - maxCust)) * avgCkie;

}

firstPike.avgCustHr();

{
// Step 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

//3E(a) create a function (that can be reused) that takes custPerHr and multplies that by the store total which comes from the (avgCkis * custPerHr) repeated this 15 times and each time put the new out come of (avgCkies * custPerhr) into one of the 15 indexs

//3P(a) function cookieSales {

//3Q(a) need to call on properties of the objects/stores, how is that done?
//3reSearch : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//http://www.devign.me/javascript-this-keyword
}

function cookiesPerHr() {
  //creating and array that calculates the cookie sales per hour with the by using the varabiles..
  // custperhour * this.avgCkie
  //for(var i = 0; i < 15 ; i++){
  var cookieSales = this.avgCustHr() * this.avgCkie;
  var PikeSales = this.storeSales.push(cookieSales);
  console.log(PikeSales);
  //}
}


// function cookiesPerHr() {
//   //creating and array that calculates the cookie sales per hour with the by using the varabiles..
//   // custperhour * this.avgCkie
//   for(var i = 0; i < 15 ; i++){
//     this.avgCustHr() * this.avgCkie;
//     this.storeHrs.push(i);
//   }
// //   console.log()
// }

firstPike.cookiesPerHr();
