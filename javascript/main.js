const boom = document.querySelector(".countdown")
const banane = document.querySelector(".banana")
const fille = document.querySelector(".girl")
const garcon = document.querySelector(".boy")
const corps = document.querySelector("body")

let boyCounter = 0
let girlCounter = 0

function display(boyCounter,girlCounter){
        let pourcentFille = Math.round((100*girlCounter)/(girlCounter+boyCounter))
        let pourcentGarcon = Math.round((100*boyCounter)/(girlCounter+boyCounter))

    let page2 = `
    <div class="heartMini">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
    </div>
    <div class="panneaux">
         <div class="fille" style="flex: ${girlCounter};">${pourcentFille}%</div>
        <div class="garcon" style="flex: ${boyCounter};">${pourcentGarcon}%</div>
    </div>
    
    `


    corps.innerHTML = page2
}


    let countDown = new Date("Feb 12, 2023 15:00:00").getTime();

    let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDown - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    boom.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";


    if (distance < 0) {
    clearInterval(x);
    boom.innerHTML = "Félicitations";
    display(page2)
}
}, 1000);



    fille.addEventListener("click",()=>{
        girlCounter += 1
        banane.innerHTML = "On verra bien si c'est une petite fille 👧🤪"
        alert("ton vote a été pris en compte, nous allons bientôt savoir si tu as raison")
    })

    garcon.addEventListener("click",()=>{
        boyCounter += 1
        banane.innerHTML = "On verra bien si c'est un petit garçon 👦🤪"
        alert("ton vote a été pris en compte, nous allons bientôt savoir si tu as raison")
    })