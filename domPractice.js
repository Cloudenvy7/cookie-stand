var EpircFailVideo = function(epicRating, hasAnimals) {
  this.epicrating = epicRating;
  this.hasAnimals = hasAnimals;
};

var parkourFail = new EpicFailVideo(7, false);
var corgiFail = new EpicFailVideo(4, true);

console.log(parkourFail);
console.log(corgiFail);