const blur=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');
const loaded=document.querySelector('.loaded');
const home = document.getElementById("hidden-button");
home.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://burov96.github.io/Mini-projects/";
});
let load=0

const blurring=()=>{
    load>99?(clearInterval(int))
(    loaded.classList.add('show')
)    :load++;
     blur.innerText=`${load}%`;
     blur.style.opacity = `${twoRangeMapper(load,0,100,1,0)}`
     bg.style.filter=`blur(${twoRangeMapper(load,0,100,30,0)}px)`

    }
let int=setInterval(blurring, 30);



function twoRangeMapper(num,in_min,in_max,out_min,out_max){
    return ((num-in_min)*(out_max-out_min))/(in_max-in_min) + out_min

}