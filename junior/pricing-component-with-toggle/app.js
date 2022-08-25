const toggler = document.getElementById('toggler')
const basic_price = document.getElementById('basic_price')
const professional_price = document.getElementById('professional_price')
const master_price = document.getElementById('master_price')

const updatePrice = () => {
  toggler.checked = !toggler.checked;
  if (toggler.checked) {
    // Monthly
    basic_price.innerHTML = '$19,99'
    professional_price.innerHTML = '$24,99'
    master_price.innerHTML = '$39,99'
  } else {
    // Annually
    basic_price.innerHTML = '$199,99'
    professional_price.innerHTML = '$249,99'
    master_price.innerHTML = '$399,99'
  }
}
