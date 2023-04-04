const btnToggle = document.querySelector('.btn-toggle')

function toggleMenu() {
    const navList = document.querySelector('.menu-nav')
    navList.classList.toggle('active')



    if(navList.classList.contains('active')){
        btnToggle.src = './assets/svg/menu-burguer-open.svg'
    }
    else {
        btnToggle.src = './assets/svg/menu-burguer-close.svg'
    }
}

btnToggle.addEventListener('click', toggleMenu)

