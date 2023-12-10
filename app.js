let btn = document.querySelector("button");
let title = document.querySelector("h1");
let text = document.querySelector("p");
let body = document.querySelector("body");

let color = [
  '#4f3130ff',
  '#753742ff',
  '#aa5042ff',
  '#d8bd8aff',
  '#d8d78fff',
  '#151e3fff',
  '#030027ff',
  '#f2f3d9ff',
  '#dc9e82ff',
  '#c16e70ff'
];

function getData(){
  fetch('https://type.fit/api/quotes')
.then(response => response.json())
.then(data => {
  console.log(data)
  let random1 = Math.floor(Math.random() * data.length);

  title.innerText = data[random1].author;
  text.innerText = data[random1].text;
  
  let random2 = Math.floor(Math.random() * color.length);
  body.style.backgroundColor = color[random2];
  console.log(random1);
})


}



btn.addEventListener("click", getData);
