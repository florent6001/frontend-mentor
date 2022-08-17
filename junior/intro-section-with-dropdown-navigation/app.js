dropdown_togglers = document.getElementsByClassName('dropdown-toggler')

var toggleNavbar = function () {
    behind_navbar = document.getElementById('behind_mobile_nav');
    navbar = document.getElementById('mobile_nav');

    if(navbar.classList.contains('hidden')) {
        behind_navbar.classList.add('bg-behind-nav-black', 'absolute', 'w-full', 'h-full', 'top-0', 'right-0')
        navbar.classList.remove('hidden')
    } else {
        behind_navbar.classList.remove('bg-behind-nav-black', 'absolute', 'w-full', 'h-full', 'top-0', 'right-0')
        navbar.classList.add('hidden')
    }
}

var toggleDropdown = function() {
    target = document.getElementById(this.getAttribute('data-dropdown'));
    if(target.classList.contains('active'))
        target.classList.remove('active')
    else
        target.classList.add('active')
}

for (var i = 0; i < dropdown_togglers.length; i++) {
    dropdown_togglers[i].addEventListener('click', toggleDropdown, false);
}