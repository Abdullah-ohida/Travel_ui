// Burger toggle
function myFunction(x) {
   x.classList.toggle("change");
 }

const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.links');
const lists = document.querySelectorAll('.list');
const link = document.getElementsByTagName('a')

lists.forEach((list)=>{
   list.addEventListener('mouseover', function(e){
      if(e.classList.contains('underline')){
         e.classList.remove('underline')
      }else{
         e.classList.add('underline')
      }
   })
});

btn.addEventListener('click', function(){
    nav.classList.toggle('show-links')
});

