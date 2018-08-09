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


var storeHrs = [' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ',' 8pm '];

var firstPike = {
  minCust: 23,
  maxCust :65,
  avgCkie :6.3,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  listOnSite: listOnSite,
  storeName: '1st and Pike',
  //storeHrs:hours
};

var seaAir = {
  minCust: 3,
  maxCust : 24,
  avgCkie : 1.2,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  listOnSite: listOnSite,
  storeName: 'Seatac Airport',
  //storeHrs:hours
};
var seaCenter = {
  minCust: 11,
  maxCust : 38,
  avgCkie : 3.7,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  listOnSite: listOnSite,
  storeName: 'Seatac Center',
  //storeHrs:hours
};
var capHill = {
  minCust: 20,
  maxCust : 38,
  avgCkie : 2.3,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  listOnSite: listOnSite,
  storeName: 'Capitol Hill',
  //storeHrs:hours
};
var alki = {
  minCust: 2,
  maxCust : 65,
  avgCkie : 4.6,
  avgCustHr: custPerHr,
  totalCkiePerHr: cookiesPerHr,
  storeSalesArr:[],
  listOnSite: listOnSite,
  storeName: 'Alki Beach',
  //storeHrs:hours
};

function custPerHr() {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
}

// function hours() {
//   for(var i = 0; i <= 15; i++){
//     var localStoreHrs = [];
//     localStoreHrs.push(i);
//     console.log(localStoreHrs);
//   }
// }

function cookiesPerHr() {
  //creating and array that calculates the cookie sales per hour with the by using the varabiles..
  // custperhour * this.avgCkie
  this.storeSalesArr = [];
  for(var i = 0; i < storeHrs.length ; i++){
    var cookieSales = Math.floor(this.avgCustHr() * this.avgCkie);
    this.storeSalesArr.push(cookieSales);
  }
  console.log(this.storeSalesArr);

}


//////listOnsite
//creating a fuction that creates an unordered lis
//it then has a loop that creates list
//it takes the store sales array is places the 1st index into the first list locaiton
//it then loops again creates another Li and takes the next index value and places it in the li
// the loop conitunties until i is =/less than 1
function listOnSite() {
  var storeSection = document.getElementsByTagName('section')[0];// finds a the tag section, which is all the section that exist, and stores it into an array. [0] is refering to the first section in the area. -- which means everything that is populating with populate within the very first section.
  var storeDiv = document.createElement('div');// creates a container div
  var storeName = document.createElement('p');// creates a p tag -- for the store name
  storeName.textContent = this.storeName;// pulls in storeName property
  var unlist = document.createElement('ul');// creates a ul
  for(var i = 0; i < this.storeSalesArr.length; i++){
    var itemInlist = document.createElement('li');// creates a li
    itemInlist.textContent = storeHrs[i] + ' : ' + this.storeSalesArr[i] ;
    unlist.appendChild(itemInlist);
  }
  console.log(listOnSite);
  storeDiv.appendChild(storeName);
  storeDiv.appendChild(unlist);
  storeSection.appendChild(storeDiv);
}

//var numberOfStores = array[firstPike,seaAir,seaCenter,capHill,alki];

// function populate(){
//   for(var i = 0; i < numberOfStores.length; i++ ){

//   }
// }
firstPike.totalCkiePerHr();
firstPike.listOnSite();

seaAir.totalCkiePerHr();
seaAir.listOnSite();

seaCenter.totalCkiePerHr();
seaCenter.listOnSite();

capHill.totalCkiePerHr();
capHill.listOnSite();

alki.totalCkiePerHr();
alki.listOnSite();


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