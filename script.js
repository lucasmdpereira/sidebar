const openMenu = document.querySelector('#menu')

    openMenu.addEventListener('click', mytoggle)

    function mytoggle(){
        const toggle = document.querySelector('aside')
        toggle.classList.toggle('sidebar_open') 
    }