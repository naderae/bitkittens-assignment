document.addEventListener("DOMContentLoaded", function() {

var summonKittensButton = document.querySelector('.summon-cats');

summonKittensButton.addEventListener('click', function(){
  $.ajax({
  url: 'http://bitkittens.herokuapp.com/cats.json',
  method: 'GET',
  dataType: 'json'
}).done(function(responseData){
  var i = 1
  responseData.cats.forEach (function(cat){

    var container = document.querySelector('#cat'+ i)
    var image = document.createElement('img');
    imageURL = cat.photo;
    image.src = imageURL;
    container.innerHTML = '';
    container.append(image);
    i++;
  
  })

  });



})










});
