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
//embeddeds the value of a function with in any variable/ array using the store contructor 
Store.prototype.listOnSite = listOnSite;
Store.prototype.cookiesPerHr = cookiesPerHr;
Store.prototype.custPerHr = custPerHr;

var firstPike = new Store(23, 65 , 6.3, '1st and Pike');
var seaAir = new Store(3, 24 , 1.2, 'Seatac Airport');
var seaCenter = new Store(11, 38 , 3.7, 'Seattle Center');
var capHill = new Store(20, 38 , 2.3, 'Capitol Hill');
var alki = new Store(2, 65 , 4.6, 'Alki');

// when the submit button is hit the input data is gathered and then put into a new instance 
// of Store, that gets appended to the bottom of the Table. 
function newFormInput(){
  // var newStore = document.getElementById('formNewStore');
  // var newStoreName = document.getElementById('formStoreName');
  // var NewStoreMin = document.getElementById('formMinCustomers');
  // document.getElementById('formMaxCustomers');
  // document.getElementById('formAvgCookieSales');
  
  var tableNewForm = document.getElementById('formNewStore');
  tableNewForm.addEventListener(
    'submit', function(element) {
      element.preventDefault();
      var tableCreateNewForm = new Product (Number(element.target.minCust.value), Number(element.target.maxCust.value), Number(element.target.avgCkie.value), element.target.storeName.value );
      var newformCustPerhr = tableCreateNewForm.custPerHr(tableCreateNewForm.maxCust, tableCreateNewForm.minCust);
      tableCreateNewForm.cookiesPerHr(newformCustPerhr, tableCreateNewForm.avgCkie);
      tableData.push(tableCreateNewForm);
    }
  );



}


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

// this area is creating a var named table data
// that takes in the contructor functions created above
// each one of the constructor functions holds object properties
// each on of the constructor functions properties are in an array.
// the for loop uses i to refer to the location in the array of the object property
// Starts making a var createIdEl that creats a tablerow (tr) on the DOM -- so that it can go in the html
// takes storeName (of tableData [i]) and creates/enters the content into a var createIdEl
// then it appends/adds the created var to the newly created table row
// tabledata [i] also has a (prototype) function that can be called on called cookiePerhr()
// Cookiesper hr takes the avg customers from the min and max of tableData [i] and * it by the avg cookie sales of tableData [i]
// then tableData [i] has a prototype function that creates table data and list it to the dom under (td) its called listOfSales()
// ListofSales creates a new var itemlist hat is a table data element, and populates it with the cookiesperhr out put Salesperhr

// wouldnt this be better as a function? could call on it rather then just have it straight run?
//function tableData(){
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

// tableData();