const labels=document.querySelectorAll('.form-control label')
const home = document.getElementById("hidden-button");
home.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://burov96.github.io/Mini-projects/";
});
labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=> `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')
})