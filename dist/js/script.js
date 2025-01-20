// Scroll
window.onscroll = function(){
    const setHeader = document.querySelector('header');
    const fixedNav = setHeader.offsetTop;

    if(window.scrollY > fixedNav){
        setHeader.classList.add('navbar-fixed');
    }else{
        setHeader.classList.remove('navbar-fixed');
    }
}



// Sandwich
const setSandwich = document.querySelector("#sandwich");
const setNavMenu = document.querySelector('#nav-menu');

setSandwich.addEventListener('click', function(){
    setSandwich.classList.toggle('sandwich-active');
    setNavMenu.classList.toggle('hidden');
})
