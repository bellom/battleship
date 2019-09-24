import './style.css';

const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', ()=> {
    playBtn.style.display = "none";
    console.log("click");
})
