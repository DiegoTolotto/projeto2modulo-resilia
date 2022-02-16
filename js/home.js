
// função da animação
// função da animação
// função da animação

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout (timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args)
    };
};


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

animeScroll();

if (target.length) {
    window.addEventListener('scroll', function (){
        animeScroll();
    })
} 




// função da textarea
// função da textarea
// função da textarea

$('#fun').on("click", () => {
    $('#textarea-primeira-informacao').html(`function nomeDaFuncao (parametro) { 
        let arrayVazia = [] 
        for (i = 0; i < parametro.length; i ++)
    }`)
});

$('#debounce').on("click", () => {
    $('#textarea-primeira-informacao').html(`const debounce = function (func, wait, immediate) {
        let timeout;
        return function (...args) {
            const context = this;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout (timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args)
        };
    };`)
});

$('#objeto').on("click", () => {
    $('#textarea-primeira-informacao').html(`class NovoObjeto { 
        constructor(primeiro, segundo, terceiro) { 
            this.primeiro = primeiro; 
            this.segundo = segundo; 
            this.terceiro = terceiro;
        }
    }`)
});













