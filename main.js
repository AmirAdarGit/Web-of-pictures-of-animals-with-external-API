var cat_result = document.getElementById('cat_result');
var dog_result = document.getElementById('dog_result');
var fox_result = document.getElementById('fox_result');

var cat_btn = document.getElementById('cat_btn');
var dog_btn = document.getElementById('dog_btn');
var fox_btn = document.getElementById('fox_btn');

dog_btn.addEventListener('click',getRundomDog);
cat_btn.addEventListener('click',getRundomCat);
fox_btn.addEventListener('click',getRundomFox);

function getRundomFox(){
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())    
    .then(data => {console.log(data)
        fox_result.innerHTML = `<img src="${data.image}"/> `
      });
}

function getRundomCat(){
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        cat_result.innerHTML = `<img src="${data.file}"/> `
      })
}
function getRundomDog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.url.includes('.mp4')){
            getRundomDog();
        }
        else{
        dog_result.innerHTML = `<img src="${data.url}"/> `
    }})}