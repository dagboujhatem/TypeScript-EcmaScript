const compteur  = document.getElementById('compteur');
let i = 0;

const increment = (e)=>{
    i++;
    compteur.querySelector('span').innerText = i.toString();
}

compteur.addEventListener('click', increment);