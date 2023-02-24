const panels=document.querySelectorAll('.panel');
const home = document.getElementById("hidden-button");
home.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://burov96.github.io/Mini-projects/";
});
panels.forEach((panel)=>{
 
    panel.addEventListener('click', ()=>{
       remover()
        panel.classList.add('active')
    })
})

 function remover(){panels.forEach(panel=>{panel.classList.remove('active')})}