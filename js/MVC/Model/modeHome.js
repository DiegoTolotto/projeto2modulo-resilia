const target = document.querySelectorAll('[data-anime]');
const animationClass = "animate";

function animeScroll () {
    const rolando = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(elemento){
        if ((rolando) > elemento.offsetTop) {
            elemento.classList.add(animationClass)
        } else {
            elemento.classList.remove(animationClass)
        }
    })
}