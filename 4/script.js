const open= document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const guy = document.querySelector('nav h5')
const comic=document.querySelector('.comic');
const home = document.getElementById("hidden-button");
home.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://burov96.github.io/Mini-projects/";
});

open.addEventListener('click', ()=> container.classList.add('show-nav'))
close.addEventListener('click', ()=>container.classList.remove('show-nav'))
open.addEventListener('click',()=>console.log(window.screen.height))
guy.addEventListener('click', ()=>comic.classList.add('show'))
comic.addEventListener('click', ()=>comic.classList.remove('show'))

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
btn.addEventListener('click',()=>{search.classList.toggle('active')
input.focus()
})