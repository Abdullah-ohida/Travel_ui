// Burger toggle
function myFunction(x) {
   x.classList.toggle("change");
 }

const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.links');
const lists = document.getElementById('list');

lists.forEach(function (list){
   list.addEventListener('mouseover', function(e){
      console.log(e.currentTarget);
   })
});

btn.addEventListener('click', function(){
    nav.classList.toggle('show-links')
});

