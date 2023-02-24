const left=document.querySelector('.left')
const right=document.querySelector('.right')
const container = document.querySelector('.container')
const home = document.getElementById("hidden-button");
home.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://burov96.github.io/Mini-projects/";
});

left.addEventListener('mouseenter', ()=>container.classList.add('hover-left'));
left.addEventListener('mouseleave', ()=>container.classList.remove('hover-left'));

right.addEventListener('mouseenter', ()=>container.classList.add('hover-right'));
right.addEventListener('mouseleave', ()=>container.classList.remove('hover-right'));
