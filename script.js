window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav')
    const button = document.getElementById('button-nav')
    // const height = window.innerHeight;
    // const vhPixels = height * 0.5

    if (this.window.scrollY >  window.innerHeight / 2){
        nav.classList.add('animated') 
        button.classList.add('button-animated')
    } else {
        nav.classList.remove('animated') 
        button.classList.remove('button-animated')
    }
    
})