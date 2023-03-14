const umschaltKnopf = document.getElementsByClassName('umschalt-knopf')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

umschaltKnopf.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})
