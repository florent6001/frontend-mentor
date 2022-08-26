const navbar = document.getElementById('nav');

const toggleNav = () => {
  console.log('test')
  if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden')
  } else {
    navbar.classList.add('hidden')
  }
}
