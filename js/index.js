let nav = document.getElementsByTagName("nav")[0];
let yLastPosition;
// console.log(window.scrollY);
window.addEventListener("scroll", () =>{
    if(window.scrollY > 50){
        nav.classList.add("hide")
    }
    if(yLastPosition > window.scrollY){
        nav.classList.remove("hide")
    }
    yLastPosition = window.scrollY;
});
// barre de progression
window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre+"px"
    })
}

let burger = document.querySelector(".burger-menu");
let yLastPosition2;
// console.log(window.scrollY);
window.addEventListener("scroll", () =>{
    if(window.scrollY > 50){
        burger.classList.add("appears")
    }
    if(window.scrollY < 51){
        burger.classList.remove("appears")
    }
    yLastPosition = window.scrollY;
});
// effet pop up burger et nav
let burger2 = document.querySelector(".burger-menu");
let nav2 = document.querySelector(".nav_2");
let link = document.querySelectorAll(".nav_2_link")
let navLinks = [...document.querySelectorAll('.nav_2 a')];
console.log(navLinks);
let sections = [...document.querySelectorAll('section')];
let sectionPosition; 

function hasClick(){
    nav2.classList.remove('inactive');
    nav2.classList.toggle("active");
    burger2.classList.toggle("disappears");
}
for(i=0; i<link.length; i++){
    link[i].addEventListener("click", closeNav);
}
burger2.addEventListener("click", hasClick);


nav2.addEventListener('click',hasClick);
function closeNav(){
    nav2.classList.toggle('inactive');
    burger2.classList.toggle("appears");
}

// smooth-scroll
function positionCalc(){
    sectionPosition = sections.map(section => section.offsetTop)
}
positionCalc();
console.log(sectionPosition);

navLinks.forEach(navLink => navLink.addEventListener('click', addScrollSmooth));

function addScrollSmooth(e){
    let linkIndex = navLinks.indexOf(e.target);
    console.log(sectionPosition[linkIndex]);
    console.log('hello');
    window.scroll({
        top: sectionPosition[linkIndex], behavior: 'smooth'
    })
}
window.addEventListener('resize', positionCalc)




// let tab = ['a', 'b,','c'];
// let el = 'a';
// let idx = tab.indexOf(el);
// console.log(idx);

