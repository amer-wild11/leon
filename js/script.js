let dropdownButton = document.querySelector('.dropdownButton')
let dropdown = document.querySelector('.dropdown')

dropdownButton.addEventListener('click', () => {
  dropdown.toggleAttribute('show')
})

if(dropdown.getAttribute('show')) {
  document.body.style.background = 'red'
}

document.addEventListener('click', (e) => {
  if(!dropdown.contains(e.target) && !dropdownButton.contains(e.target)) {
    dropdown.removeAttribute('show')
  }
})