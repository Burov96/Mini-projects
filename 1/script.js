const panels=document.querySelectorAll('.panel');
panels.forEach((panel)=>{
 
    panel.addEventListener('click', ()=>{
       remover()
        panel.classList.add('active')
    })
})

 function remover(){panels.forEach(panel=>{panel.classList.remove('active')})}