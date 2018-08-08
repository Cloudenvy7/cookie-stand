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


var storeHrs = ["6am","7am","8am","9am","6am","6am","6am","6am","6am","6am","6am","6am","6am","6am","6am"];

var firstPike = {
  minCust: 23,
  maxCust :65,
  avgCkie :6.3,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  listOnSite: listOnSite,
  //storeHrs:hours
};

var seaAir = {
  minCust: 3,
  maxCust : 24,
  avgCkie : 1.2,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  //storeHrs:hours
};
var seaCenter = {
  minCust: 11,
  maxCust : 38,
  avgCkie : 3.7,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  //storeHrs:hours
};
var capHill = {
  minCust: 20,
  maxCust : 38,
  avgCkie : 2.3,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  //storeHrs:hours
};
var alki = {
  minCust: 2,
  maxCust : 65,
  avgCkie : 4.6,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  //storeHrs:hours
};

function custPerHr() {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
}

function hours() {
  for(var i = 0; i <= 15; i++){
    var localStoreHrs = [];
    localStoreHrs.push(i);
    console.log(localStoreHrs);
  }
}

function cookiesPerHr() {
  //creating and array that calculates the cookie sales per hour with the by using the varabiles..
  // custperhour * this.avgCkie
  this.storeSalesArr = [];
  for(var i = 0; i < storeHrs.length ; i++){
    var cookieSales = Math.floor(this.avgCustHr() * this.avgCkie);
    this.storeSalesArr.push(cookieSales);  
  }
  console.log(this.storeSalesArr);

  //creating a fuction that creates an unordered lis
  //it then has a loop that creates list 
  //it takes the store sales array is places the 1st index into the first list locaiton
  //it then loops again creates another Li and takes the next index value and places it in the li
  // the loop conitunties until i is =/less than 1  
}

function listOnSite() {
  for(var i = 0; i <= this.storeSalesArr.length; i++){
    var unlist = document.getElementById('theList');
    var itemInlist = document.createElement('li');itemInlist.textContent = this.storeSalesArr[i];
    unlist.appendChild(itemInlist);
    //need a loop that will pull in create and li and it will iterate through based on the length of this.storeSalesArr
    // (this.storeSalesArr);
  }
  console.log(listOnSite);
}
firstPike.totalCkiePerHr();
firstPike.listOnSite();
// seaAir.totalCkiePerHr();
// seaCenter.totalCkiePerHr();
// capHill.totalCkiePerHr();
// alki.totalCkiePerHr();


// for(var i =0; i <  ;i++);

// function cookiesPerHr() {
//   //creating and array that calculates the cookie sales per hour with the by using the varabiles..
//   // custperhour * this.avgCkie
//   for(var i = 0; i < 15 ; i++){
//     this.avgCustHr() * this.avgCkie;
//     this.storeHrs.push(i);
//   }
// //   console.log()
// }


/// FOR THE DOM 
/// need to pull in the document that cr