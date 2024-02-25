const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function(){
    alert(' desde el fondo de mi corazón sabía que drías que sí uwu')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);  
    noBtn.style.setProperty('top', randomY+'%'); 
    noBtn.style.setProperty('top', randomX+'%');
    noBtn.style.setProperty('transform', 'translate(-${randomX},-${randomY}%)');
})
