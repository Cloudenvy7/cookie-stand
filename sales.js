'use strict';
console.log('javascript loaded');

// this is an array that holds the store hours
var storeHrs = [' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ',' 8pm '];

function storeHrsHeaders() {
  for(var i = 0; i < storeHrs.length; i++) {
    var tblHead = document.getElementById('tblHead');
    var createTblHead = document.createElement('th');
    createTblHead.textContent = storeHrs[i];
    tblHead.appendChild(createTblHead);
  }
  var createTblHeads = document.createElement('th');
  createTblHeads.textContent = 'Total';
  tblHead.appendChild(createTblHeads);
}

storeHrsHeaders();
// need fuction/constructor that takes in the paramaters of the store and sets the variable in a "this"

function Store(minCust,maxCust,avgCkie, storeName){
  //takes in the properties of the object, sets as paramters and then replaces the value of (this) -refering to the object that is calling on function storeNumbers
  this.minCust = minCust ;
  this.maxCust = maxCust ;
  this.avgCkie = avgCkie ;
  this.storeName = storeName ;
  this.dailyTotal = 0;
}
Store.prototype.listOnSite = listOnSite;
Store.prototype.cookiesPerHr = cookiesPerHr;
Store.prototype.custPerHr = custPerHr;

var firstPike = new Store(23, 65 , 6.3, '1st and Pike');
var seaAir = new Store(3, 24 , 1.2, 'Seatac Airport');
var seaCenter = new Store(11, 38 , 3.7, 'Seattle Center');
var capHill = new Store(20, 38 , 2.3, 'Capitol Hill');
var alki = new Store(2, 65 , 4.6, 'Alki');

function custPerHr() {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
}

function cookiesPerHr() {
  //creating and array that calculates the cookie sales per hour with the by using the varabiles..
  // custperhour * this.avgCkie
  this.storeSalesArr = [];
  for(var i = 0; i < storeHrs.length ; i++){
    console.log(storeHrs[i]);
    var cookieSales = Math.floor(this.custPerHr() * this.avgCkie);
    this.storeSalesArr.push(cookieSales);
    this.dailyTotal += cookieSales;
  }
}
// funciton is to find the class storeList by name
// then it creates table row element
// then a loop creates td elements that populate the table row 16 times
// the first column is the store name
// the next 15 columns are the cookie values
function listOnSite() {
  // var tableRow = document.createElement('tr');// creates table row
  // tableRow.textContent = this.storeName;// pulls in storeName property
  this.storeSalesArr.push(this.dailyTotal);
  for(var i = 0; i < this.storeSalesArr.length; i++){
    var itemInlist = document.createElement('td');
    itemInlist.textContent = this.storeSalesArr[i];// creates a li
    createIdEl.appendChild(itemInlist);
  }
  // console.log(listOnSite);
//   tableRow.appendChild(storeName);
//   storeDiv.appendChild(unlist);
//   storeSection.appendChild(storeDiv); 

}


var table = document.getElementById('storeList');
var tableData =[firstPike,capHill,alki,seaAir,seaCenter];
for(var i = 0; i < tableData.length; i++){
  console.log(tableData[i].storeName);
  var createIdEl = document.createElement('tr');
  createIdEl.textContent = tableData[i].storeName;
  table.appendChild(createIdEl);
  tableData[i].cookiesPerHr();
  tableData[i].listOnSite();
}


// var firstPike = {
//   minCust: 23,
//   maxCust :65,
//   avgCkie :6.3,
//   avgCustHr: custPerHr,
//   totalCkiePerHr: cookiesPerHr,
//   storeSalesArr:[],
//   listOnSite: listOnSite,
//   storeName: '1st and Pike',
//   //storeHrs:hours
// };

// var seaAir = {
//   minCust: 3,
//   maxCust : 24,
//   avgCkie : 1.2,
//   avgCustHr: custPerHr,
//   totalCkiePerHr: cookiesPerHr,
//   storeSalesArr:[],
//   listOnSite: listOnSite,
//   storeName: 'Seatac Airport',
//   //storeHrs:hours
// };
// var seaCenter = {
//   minCust: 11,
//   maxCust : 38,
//   avgCkie : 3.7,
//   avgCustHr: custPerHr,
//   totalCkiePerHr: cookiesPerHr,
//   storeSalesArr:[],
//   listOnSite: listOnSite,
//   storeName: 'Seatac Center',
//   //storeHrs:hours
// };
// var capHill = {
//   minCust: 20,
//   maxCust : 38,
//   avgCkie : 2.3,
//   avgCustHr: custPerHr,
//   totalCkiePerHr: cookiesPerHr,
//   storeSalesArr:[],
//   listOnSite: listOnSite,
//   storeName: 'Capitol Hill',
//   //storeHrs:hours
// };
// var alki = {
//   minCust: 2,
//   maxCust : 65,
//   avgCkie : 4.6,
//   avgCustHr: custPerHr,
//   totalCkiePerHr: cookiesPerHr,
//   storeSalesArr:[],
//   listOnSite: listOnSite,
//   storeName: 'Alki Beach',
//   //storeHrs:hours
// };


// // function hours() {
// //   for(var i = 0; i <= 15; i++){
// //     var localStoreHrs = [];
// //     localStoreHrs.push(i);
// //     console.log(localStoreHrs);
// //   }
// // }



// //////listOnsite
// //creating a fuction that creates an unordered lis
// //it then has a loop that creates list
// //it takes the store sales array is places the 1st index into the first list locaiton
// //it then loops again creates another Li and takes the next index value and places it in the li
// // the loop conitunties until i is =/less than 1

// //var numberOfStores = array[firstPike,seaAir,seaCenter,capHill,alki];

// // function populate(){
// //   for(var i = 0; i < numberOfStores.length; i++ ){

// //   }
// // }
// firstPike.totalCkiePerHr();
// firstPike.listOnSite();

// seaAir.totalCkiePerHr();
// seaAir.listOnSite();

// seaCenter.totalCkiePerHr();
// seaCenter.listOnSite();

// capHill.totalCkiePerHr();
// capHill.listOnSite();

// alki.totalCkiePerHr();
// alki.listOnSite();


// // for(var i =0; i <  ;i++);

// // function cookiesPerHr() {
// //   //creating and array that calculates the cookie sales per hour with the by using the varabiles..
// //   // custperhour * this.avgCkie
// //   for(var i = 0; i < 15 ; i++){
// //     this.avgCustHr() * this.avgCkie;
// //     this.storeHrs.push(i);
// //   }
// // //   console.log()
// // }


// /// FOR THE DOM
// /// need to pull in the document that cr