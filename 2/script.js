const progress=document.getElementById('progress');
const back=document.getElementById('back');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');
const home = document.getElementById("hidden-button");
home.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://burov96.github.io/Mini-projects/";
});

let currentActive=1;

next.addEventListener('click', ()=>{
    currentActive++;
    currentActive>circles.length?currentActive=circles.length:null;
    update()
});
back.addEventListener('click', ()=>{
    currentActive--;
    currentActive<1?currentActive=1:null;
    update()
});
function update(){
    circles.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add('active')
        }
        else{circle.classList.remove('active')}
    })
    const actives=document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%';
    if(currentActive===1){back.disabled=true}
    else if(currentActive===circles.length){next.disabled=true}
    else{back.disabled=false;next.disabled=false}

}