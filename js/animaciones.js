
function alerta1() {
    Swal.fire({
        imageUrl: './Imagenes/invitacion.gif',
        imageWidth: 100,
        imageHeight: 100,
        text:'a la boda de Delia y Santiago 😊',
        title:'Hey! Haz sido invitado 🎉',
        confirmButtonText: 'Abrir',
        color: '#b8b8b8',
        background: '#273447 ',
        backdrop: 'rgba(0,0,0,0.7)'
    });
}
alerta1();

function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
    rootMargin: '-200px',
})

scrollTrigger('.loader', {
    rootMargin: '-200px',
    cb: function(el){
        el.innerText = 'Loading...'
        setTimeout(() => {
            el.innerText = 'Task Complete!'
        }, 1000)
    }
})