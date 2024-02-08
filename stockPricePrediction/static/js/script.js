var text="Market tells."

var centerText=document.querySelector(".two")
var i=1

function typingEffect(){
    centerText.innerHTML=text.slice(0,i);
    i>text.length ? i=1: i++;
    setTimeout(typingEffect,200)
}
typingEffect();

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-02-05&' +
          'sortBy=popularity&' +
          'apiKey=0becb7dbee7940d3898f1df8ee3ddf7b';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })